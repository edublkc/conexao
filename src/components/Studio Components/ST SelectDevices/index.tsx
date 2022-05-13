import { Container } from "./styled"

import { BsCameraVideo, BsMic } from "react-icons/bs"
import { themes } from "../../../styles/themes"
import React, { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCanvasContext } from "../../../context/canvasContext"

interface SelectDevicesProps {
    isDevicesConfigOpen?: React.Dispatch<React.SetStateAction<boolean>>
    createMedia?: (stream: MediaStream) => Promise<void>
}

export let hostNameToBeDisplayed: string

export function SelectDevices(props: SelectDevicesProps) {
    const navigate = useNavigate()

    const { devices, setDevices, nameToBeDisplayed, setNameToBeDisplayed } = useCanvasContext()


    const [micDevices, setMicDevices] = useState<MediaDeviceInfo[]>([])
    const [cameraDevices, setCameraDevices] = useState<MediaDeviceInfo[]>([])

    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement)

    useEffect(() => {
        let unmounted = false

        async function getCamAndMicDevices() {

            const devices = await navigator.mediaDevices.enumerateDevices()
            const mics = devices.filter((device) => device.kind === 'audioinput')
            const cams = devices.filter((cam) => cam.kind === 'videoinput')

            if (!unmounted) {
                setMicDevices(mics)
                setCameraDevices(cams)
            }

        }

        getCamAndMicDevices()

        return () => {

            unmounted = true
        }
    }, [])


    useEffect(() => {
        let unmounted = false



        async function getPermissionDevice() {
            var constraints = {
                audio: {
                    deviceId: devices.micId,
                    sampleRate: 22050,
                    echoCancellation: true
                },
                video: {
                    deviceId:devices.camId,
                    width: { min: 100, ideal: 720, max: 1920 },
                    height: { min: 100, ideal: 1280, max: 1080 },
                    frameRate: { ideal: 30 }
                }
            };

            const permissions = await navigator.mediaDevices.getUserMedia(constraints)
            videoRef.current.srcObject = permissions
        }

        if (!unmounted) {
            getPermissionDevice()
        }


        return () => {
            unmounted = true
        }

    }, [devices])





    function handleGoToStudio() {
        if (nameToBeDisplayed.trim() === '') {
            alert('Enter a name')
            return
        }

        navigate('/studio')
    }

    return (
        <Container>
            <header><h1>Welcome to Connection Studio</h1></header>

            <div className="devices">

                <div className="leftSide">
                    <span>Check your audio and video device</span>

                    <div className="video">
                        <video id="video" ref={videoRef} width="100%" height="100%" autoPlay muted />
                    </div>
                </div>

                <div className="rightSide">

                    <div className="deviceConfig">
                        <span><BsCameraVideo color={themes.colors.pink[500]} />Camera</span>
                        <select onChange={(e) => setDevices({ ...devices, camId: e.target.value })}>
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
                        <span><BsMic color={themes.colors.pink[500]} />Audio</span>
                        <select onChange={(e) => setDevices({ ...devices, micId: e.target.value })}>
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
                        <label>Name to be displayed: </label>
                        <input type="text" value={nameToBeDisplayed} onChange={(e) => {
                            setNameToBeDisplayed(e.target.value)
                            hostNameToBeDisplayed = e.target.value
                        }} />
                    </div>

                    <button className="goStudioButton" type="button" onClick={handleGoToStudio}>Go to studio</button>

                </div>
            </div>


        </Container>
    )
}

