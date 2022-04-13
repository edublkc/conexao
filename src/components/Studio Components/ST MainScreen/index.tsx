import { useContext, useEffect, useRef, useState } from "react"
import { Container, MainVideo, Options, Thumbs, Videos, Wrapp } from "./styled"

import { MdOutlineScreenShare } from "react-icons/md"
import { BsCameraVideoFill, BsCameraVideoOffFill, BsMicFill, BsMicMuteFill } from "react-icons/bs"
import { isChatMessageSelected,displayMessage, displayName} from "../../../context/canvasContext"

import { themes } from "../../../styles/themes"


import { useCanvasContext } from "../../../context/canvasContext"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"

let canvasContext: CanvasRenderingContext2D | null

let screenX0 = 0;
let screenY0 = 0;
let screenX1 = 0
let screenY1 = 0

let cameraX0 = 0;
let cameraY0 = 0;
let cameraX1 = 700
let cameraY1 = 393

export function MainScreen() {
    const { broadcastInformations} = useContext(BroadcastInformationsContext)

    const {devices,nameToBeDisplayed,setCanvasStream: setCanvasStreamContext,setAudioStream: setAudioStreamContext} = useCanvasContext()


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
        canvasContext = canvasRef.current.getContext('2d')
        getCameraDevice()
        getAudioDevice()
    }, [])

    useEffect(() => {
        setImageOnVideo()
        setImageAndAudioInCanvas()
        setScreenShareOnVideo()
    }, [cameraStream, audioStream, screenStream])



    async function getCameraDevice() {
        var constraints = {
            video: {
                deviceId: devices.camId,
                width: { min: 100, ideal: 1280, max: 1920 },
                height: { min: 100, ideal: 720, max: 1080 },
                frameRate: { ideal: 15 },
                facingMode: "environment"
            }
        };

        const cameraStream = await navigator.mediaDevices.getUserMedia(constraints)
        setCameraStream(cameraStream)

    }

    async function getAudioDevice() {
        const audioStream = await navigator.mediaDevices.getUserMedia({
            audio: {
                deviceId: devices.micId
            }
        });

        setAudioStream(audioStream)
        setAudioStreamContext(audioStream)
    }

    async function getScreenShare() {
        const stream = await navigator.mediaDevices.getDisplayMedia()
        setIsScreenSharing(true)
        setScreenStream(stream)

    }
    screenStream?.getVideoTracks()[0].addEventListener("ended", () => setIsScreenSharing(false))

    function setScreenShareOnVideo() {
        if (screenStream) {
            shareScreenRef.current.srcObject = screenStream

        }
    }

    function setImageOnVideo() {
        if (cameraStream) {
            camRef.current.srcObject = cameraStream
        }
    }

    function drawInCanvas(video: any, ctx: CanvasRenderingContext2D | null, screen?: any) {
        ctx?.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)

        if (ctx) {
            ctx.fillStyle = 'rgb(10, 76, 199)'
        }

        ctx?.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        ctx?.drawImage(
            screen,
            screenX0,
            screenY0,
            screenX1,
            screenY1)

        ctx?.drawImage(
            video,
            cameraX0,
            cameraY0,
            cameraX1,
            cameraY1)

        if (canvasContext) {
            
      

            if(isChatMessageSelected){
                drawMessage()
            }else{
                canvasContext.fillStyle = themes.colors.pink[500]
                canvasContext.fillRect(0, canvasRef.current.height - 40, canvasContext?.measureText(nameToBeDisplayed).width + 10, 30);
    
                canvasContext.font = "20px Poppins";
                canvasContext.fillStyle = "#fff";
                canvasContext.fillText(nameToBeDisplayed, 5, canvasRef.current.height - 20)
            }
            
        }

        setTimeout(drawInCanvas, 15, video, ctx, screen)
    }

    function drawMessage(){
        if(canvasContext && displayMessage){
        

            //Draw Name
            canvasContext.fillStyle = themes.colors.pink[500]
            canvasContext.fillRect(0, canvasRef.current.height - 75, canvasContext?.measureText(displayName).width + 43, 30);

            canvasContext.font = "16px Poppins";
            canvasContext.fillStyle = "#fff";
            canvasContext.fillText(displayName, 5, canvasRef.current.height - 58)

            //Draw Message
            

            const lines = []


            if(displayMessage.length > 95){
                canvasContext.fillStyle = '#fff'
                canvasContext.fillRect(0, canvasRef.current.height - 50, canvasContext.measureText(displayMessage).width + 15 , 50);
            
                canvasContext.font = "13px Poppins";
                canvasContext.fillStyle = "#121212";

                const firstLine = displayMessage.substring(0,95)
                const secondLine = displayMessage.substring(95)
                lines.push(firstLine)
                lines.push(secondLine)

                const lineheight = 20

                for (let i = 0; i < lines.length; i++) {
                    canvasContext.fillText(lines[i], 5, canvasRef.current.height - 30 + (i * lineheight));
                  }
            }else{
                canvasContext.fillStyle = '#fff'
                canvasContext.fillRect(0, canvasRef.current.height - 50, canvasContext.measureText(displayMessage).width , 25);
            
                canvasContext.font = "13px Poppins";
                canvasContext.fillStyle = "#121212";

                canvasContext.fillText(displayMessage, 5, canvasRef.current.height - 32.5);
            }
        }
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
            drawInCanvas(camRef.current, canvasContext, shareScreenRef.current)
        })

    }

    function setSelectedScreenLayout(layout: string) {
        switch (layout) {
            case 'cameraOnly':
                screenX0 = 0;
                screenY0 = 0;
                screenX1 = 0;
                screenY1 = 0;

                cameraX0 = 0;
                cameraY0 = 0;
                cameraX1 = 700;
                cameraY1 = 393;
                break;

            case 'screenOnly':
                screenX0 = 0;
                screenY0 = 0;
                screenX1 = 700;
                screenY1 = 393;

                cameraX0 = 0;
                cameraY0 = 0;
                cameraX1 = 0;
                cameraY1 = 0;
                break;

            case 'bottomRight':
                screenX0 = 0;
                screenY0 = 0;
                screenX1 = canvasRef.current.width;
                screenY1 = canvasRef.current.height;

                cameraX0 = .625 * canvasRef.current.width;
                cameraY0 = .625 * canvasRef.current.height;
                cameraX1 = canvasRef.current.width / 3;
                cameraY1 = canvasRef.current.height / 3;
                break;

            case 'bottomLeft':
                screenX0 = 0;
                screenY0 = 0;
                screenX1 = canvasRef.current.width;
                screenY1 = canvasRef.current.height;

                cameraX0 = 28;
                cameraY0 = .625 * canvasRef.current.height;
                cameraX1 = canvasRef.current.width / 3;
                cameraY1 = canvasRef.current.height / 3;
                break;

            case 'topRight':
                screenX0 = 0;
                screenY0 = 0;
                screenX1 = canvasRef.current.width;
                screenY1 = canvasRef.current.height;

                cameraX0 = .625 * canvasRef.current.width;
                cameraY0 = 15;
                cameraX1 = canvasRef.current.width / 3;
                cameraY1 = canvasRef.current.height / 3;
                break;

            case 'topLeft':
                screenX0 = 0;
                screenY0 = 0;
                screenX1 = canvasRef.current.width;
                screenY1 = canvasRef.current.height;

                cameraX0 = 15;
                cameraY0 = 15;
                cameraX1 = canvasRef.current.width / 3;
                cameraY1 = canvasRef.current.height / 3;
                break;

            case 'sideBySide':
                screenX0 = canvasRef.current.width * 0.20;
                screenY0 = canvasRef.current.height * 0.1;
                screenX1 = canvasRef.current.width * 0.8;
                screenY1 = canvasRef.current.height * 0.8;

                cameraX0 = canvasRef.current.width * 0.01;
                cameraY0 = canvasRef.current.height * 0.38;
                cameraX1 = canvasRef.current.width * 0.18;
                cameraY1 = canvasRef.current.height * 0.24;
                break;
        }

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

    function debug() {
        console.log(canvasContext?.measureText('Eduardo mota').width)
    }





    return (
        <Container>
            <Wrapp>
                <MainVideo>
                    <header>
                        <h1>{broadcastInformations.title}</h1>
                    </header>

                    <canvas id="canva" ref={canvasRef} width="700" height="393"></canvas>

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


                    <div className="thumbnail" onClick={() => setSelectedScreenLayout('bottomRight')} style={{ display: `${isScreenSharing ? 'block' : 'none'}` }}>
                        <video ref={shareScreenRef} autoPlay muted id="camera" />
                    </div>
                </Thumbs>


            </Videos>


        </Container>
    )
}


/*
 
 <button onClick={debug}>
                        DEBUGAR
                    </button>

 <ScreenLayouts>
                    <div className="screenBase" onClick={() => setSelectedScreenLayout('cameraOnly')}>
                        <div className="cameraOnly center sizes">
                            <BsCameraVideoFill fontSize="2rem" color={themes.colors.pink[500]} />
                        </div>
                    </div>

                    <div className="screenBase" onClick={() => setSelectedScreenLayout('screenOnly')}>
                        <div className="screenOnly center sizes">
                        </div>
                    </div>

                    <div className="screenBase active" onClick={() => setSelectedScreenLayout('bottomRight')}>
                        <div className="bottomRight sizes">
                            <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                        </div>
                    </div>

                    <div className="screenBase" onClick={() => setSelectedScreenLayout('bottomLeft')}>
                        <div className="bottomLeft sizes">
                            <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                        </div>
                    </div>

                    <div className="screenBase" onClick={() => setSelectedScreenLayout('topRight')}>
                        <div className="topRight sizes">
                            <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                        </div>
                    </div>

                    <div className="screenBase" onClick={() => setSelectedScreenLayout('topLeft')}>
                        <div className="topLeft sizes">
                            <BsCameraVideoFill fontSize="0.8rem" color="#fff" />
                        </div>
                    </div>

                    <div className="screenBase" onClick={() => setSelectedScreenLayout('sideBySide')}>
                        <BsCameraVideoFill fontSize="0.8rem" color={themes.colors.pink[500]} />
                        <div className="screen sizes"></div>
                    </div>

                </ScreenLayouts>

*/