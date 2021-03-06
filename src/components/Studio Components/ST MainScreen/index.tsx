import { useContext, useEffect, useRef, useState } from "react"
import { Container, MainVideo, Options, Thumbs, Videos, Wrapp } from "./styled"

import { MdOutlineScreenShare } from "react-icons/md"
import { BsCameraVideoFill, BsCameraVideoOffFill, BsMicFill, BsMicMuteFill } from "react-icons/bs"

import { themes } from "../../../styles/themes"

import { useCanvasContext } from "../../../context/canvasContext"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"
import { setSelectedScreenLayout } from "../../../draws/ScreenLayoutDraw/screenLayoutDraw"
import { drawInCanvas } from "../../../draws/renderDraw"
import { stylesDraw, StylesProps } from "../../../draws/StylesDraw/stylesDraw"

import { selectedShape, setCanvasReferenceInShapeMouseEvents } from "../../../draws/ShapesDraw/shapesMouseEventsDraw"
import { setCanvasReferenceInDeleteShape } from "../../../draws/ShapesDraw/deleteShapeDraw"


export let canvasContext: CanvasRenderingContext2D | null


export function MainScreen() {
    const { broadcastInformations } = useContext(BroadcastInformationsContext)

    const { devices, 
        nameToBeDisplayed, 
        setCanvasStream: setCanvasStreamContext, 
        setAudioStream: setAudioStreamContext,
        setIsSomeSelectedShape} = useCanvasContext()


    const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement)
    const camRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)
    const shareScreenRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)

    const [cameraStream, setCameraStream] = useState<MediaStream>()
    const [audioStream, setAudioStream] = useState<MediaStream>()
    const [screenStream, setScreenStream] = useState<MediaStream>()
    const [canvasStream, setCanvasStream] = useState<MediaStream>()

    const [isCameraStop, setIsCameraStop] = useState(false)
    const [isMicStop, setIsMicStop] = useState(false)
    const [isDevicesConfigOpen, setIsDevicesConfigOpen] = useState(false)

    const [isScreenSharing, setIsScreenSharing] = useState(false)


    useEffect(() => {
        let styles = localStorage.getItem('stylesDraw');
        if (styles !== null) {
            let styleObj: StylesProps = JSON.parse(styles)
         stylesDraw(styleObj)
        }
    }, [])

    useEffect(() => {
        let unmounted = false

        canvasContext = canvasRef.current.getContext('2d')

        async function getCameraDevice() {
            var constraints = {
                video: {
                    deviceId: devices.camId,
                    width: { min: 100, ideal: 1280, max: 1920 },
                    height: { min: 100, ideal: 720, max: 1080 },
                    frameRate: { ideal: 30 },
                    facingMode: "environment"
                }
            };
    
            const cameraStream = await navigator.mediaDevices.getUserMedia(constraints)

            if(!unmounted){
                setCameraStream(cameraStream)
            }
        
        }

        async function getAudioDevice() {
            const audioStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    deviceId: devices.micId
                }
            });
    
            if(!unmounted){
                setAudioStream(audioStream)
               setAudioStreamContext(audioStream)
            }
            
        }


        if(!unmounted){
            getCameraDevice()
            getAudioDevice()
        }

        
    
        return () =>{
            unmounted = true
        }
        
    }, [])

    useEffect(() => {
        let unmounted = false

        if(!unmounted){
            setImageOnVideo()
            setImageAndAudioInCanvas()
            setScreenShareOnVideo()
        }
        
        return () =>{
            unmounted = true
        }
    }, [cameraStream, audioStream, screenStream])


    async function getScreenShare() {
        const stream = await navigator.mediaDevices.getDisplayMedia()
        setIsScreenSharing(true)
        setScreenStream(stream)

    }
    
    screenStream?.getVideoTracks()[0].addEventListener("ended", () => {
        setIsScreenSharing(false)
        setSelectedScreenLayout('cameraOnly')
    })
    

    function setScreenShareOnVideo() {
        if (screenStream) {
            shareScreenRef.current.srcObject = screenStream

        }
    }

    function setImageOnVideo() {
        
        if (cameraStream) {
            camRef.current.srcObject = cameraStream
        }else{
            update(camRef.current, canvasContext, shareScreenRef.current)
        }
    }

    function update(video: any, ctx: CanvasRenderingContext2D | null, screen?: any) {
        drawInCanvas(video, ctx, screen, canvasRef)
        //window.requestAnimationFrame(()=> update(video,ctx,screen))
        //setTimeout(update, 15, video, ctx, screen)
    }


    function setImageAndAudioInCanvas() {

        setCanvasStream(canvasRef.current.captureStream(35))
        setCanvasStreamContext(canvasRef.current.captureStream(35))

        if (audioStream) {
            for (const track of audioStream.getTracks()) {
                canvasStream?.addTrack(track)
            }
        }

        camRef.current.addEventListener('play', () => {
            update(camRef.current, canvasContext, shareScreenRef.current)
            setCanvasReferenceInShapeMouseEvents(canvasRef)
            setCanvasReferenceInDeleteShape(canvasRef)
        })


    }


    function toggleCamera() {
        setIsCameraStop(!isCameraStop)
        handleStopVideo()
    }


    function handleStopVideo() {
        if (isCameraStop) {
            cameraStream?.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'video') {
                    track.enabled = true
                }
            });
        } else {
            cameraStream?.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'video') {
                    track.enabled = false
                }
            });
        }
    }

    function toggleMic() {
        setIsMicStop(!isMicStop)
        handleStopMic()
    }


    function handleStopMic() {
        if (isMicStop) {
            audioStream?.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'audio') {
                    track.enabled = true
                }
            });
        } else {
            audioStream?.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'audio') {
                    track.enabled = false
                }
            });
        }
    }

   window.addEventListener('keydown',(e)=>{
        if(e.key === "Delete" || e.keyCode === 46){
            checkIfHasSomeShapeSelected()
        }
    })


   
   
    function checkIfHasSomeShapeSelected(){
        if(selectedShape){
            setIsSomeSelectedShape(selectedShape)
        }else if(selectedShape == null){
            setIsSomeSelectedShape(null)
        }
    }

    function debug() {

    }






    return (
        <Container>
            <Wrapp>
                <MainVideo>
                    <header>
                        <h1>{broadcastInformations.title}</h1>
                    </header>

                    <canvas id="canva" ref={canvasRef} width="700" height="393" onClick={checkIfHasSomeShapeSelected}></canvas>


                </MainVideo>
            </Wrapp>


            <Videos>
                <Options>
                    <button onClick={toggleCamera}>
                        {isCameraStop ? (<BsCameraVideoOffFill color={themes.colors.error} />) : (<BsCameraVideoFill />)}

                    </button>

                    <button onClick={toggleMic}>
                        {isMicStop ? (<BsMicMuteFill color={themes.colors.error} />) : (<BsMicFill />)}
                    </button>

                    <button onClick={getScreenShare}>
                        <MdOutlineScreenShare />
                    </button>
                </Options>


                <Thumbs>
                    <div className="thumbnail" onClick={() => setSelectedScreenLayout('cameraOnly')}>
                        <video ref={camRef} autoPlay muted id="camera" />
                    </div>


                    <div className="thumbnail" onClick={() => setSelectedScreenLayout('screenOnly')} style={{ display: `${isScreenSharing ? 'block' : 'none'}` }}>
                        <video ref={shareScreenRef} autoPlay muted id="screen" />
                    </div>
                </Thumbs>

            </Videos>

        </Container>
    )
}

// 