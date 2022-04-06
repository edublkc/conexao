import { Container } from "./styled"

import { BsCameraVideo, BsMic } from "react-icons/bs"
import { themes } from "../../../styles/themes"
import React, { useContext, useEffect, useRef, useState } from "react"
import { PlatformsContext } from "../../../context/platformsContext"
import { useNavigate } from "react-router-dom"

interface SelectDevicesProps{
    isDevicesConfigOpen?: React.Dispatch<React.SetStateAction<boolean>>
    createMedia?: (stream: MediaStream) => Promise<void>
}

export function SelectDevices(props: SelectDevicesProps) {
    const navigate = useNavigate()

    const {devices,setDevices,nameToBeDisplayed,setNameToBeDisplayed} = useContext(PlatformsContext)    
    
    const [micDevices, setMicDevices] = useState<MediaDeviceInfo[]>([])
    const [cameraDevices, setCameraDevices] = useState<MediaDeviceInfo[]>([])

    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)

    useEffect(() => {
        getCamAndMicDevices()
        
    }, [])

    useEffect(()=>{
        getPermissionDevice()
    },[devices])

    async function getPermissionDevice(){
        var constraints = {
            audio: {
                deviceId: devices.micId,
                sampleRate: 22050,
                echoCancellation: true
            },
            video: {
                deviceId: devices.camId,
                width: { min: 100, ideal: 720, max: 1920 },
                height: { min: 100, ideal: 1280, max: 1080 },
                frameRate: { ideal: 15 }
            }
        };

        const permissions = await navigator.mediaDevices.getUserMedia(constraints)
        videoRef.current.srcObject = permissions
        //setStreamMedia(permissions)
    }

    async function getCamAndMicDevices() {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const mics = devices.filter((device) => device.kind === 'audioinput')
        setMicDevices(mics)

        const cams = devices.filter((cam) => cam.kind === 'videoinput')
        setCameraDevices(cams)

    }

    function handleGoToStudio(){
        if(nameToBeDisplayed.trim() === ''){
            alert('Digite um nome')
            return
        }

        navigate('/studio')
    }

    return (
        <Container>
            <header><h1>Bem-vindo ao estudio do Conexão</h1></header>

            <div className="devices">

                <div className="leftSide">
                    <span>Verifique seu dispositivo de áudio e vídeo</span>

                    <div className="video">
                        <video id="video" ref={videoRef} width="100%" height="100%" autoPlay muted />
                    </div>
                </div>

                <div className="rightSide">

                    <div className="deviceConfig">
                        <span><BsCameraVideo color={themes.colors.pink[500]} />Câmera</span>
                        <select onChange={(e)=> setDevices({...devices,camId: e.target.value})}>
                            {cameraDevices.map((device) => {

                                return (
                                    <option key={device.deviceId} value={device.deviceId}>
                                        {device.label}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="deviceConfig">
                        <span><BsMic color={themes.colors.pink[500]} />Áudio</span>
                        <select onChange={(e)=> setDevices({...devices,micId: e.target.value})}>
                            {micDevices.map((device) => {

                                return (
                                    <option key={device.deviceId} value={device.deviceId}>
                                        {device.label}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="deviceConfig">
                        <label>Nome a ser exibido: </label>
                        <input type="text" value={nameToBeDisplayed} onChange={(e) => setNameToBeDisplayed(e.target.value)}/>
                    </div>

                    <button className="goStudioButton" type="button" onClick={handleGoToStudio}>Ir para estúdio</button>
                   
                </div>
            </div>


        </Container>
    )
}

