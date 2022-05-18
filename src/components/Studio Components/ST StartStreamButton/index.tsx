import { useContext, useEffect, useState } from "react"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"
import { Container } from "./styled"
import { RiBroadcastFill } from "react-icons/ri"

import { io } from "socket.io-client"
import { useCanvasContext } from "../../../context/canvasContext"
import { endBroadcast } from "../../../services/endLive"
import { themes } from "../../../styles/themes"

const socketOptions = { secure: true, reconnection: true, reconnectionDelay: 1000, timeout: 15000, pingTimeout: 15000, pingInterval: 45000, query: { framespersecond: 15, audioBitrate: 22050 } };
const socket = io('132.226.240.66:3036', socketOptions)

interface StartStreamButtonProps {
    canvasStream?: MediaStream | undefined
    audioStream: MediaStream | undefined
}

let mediaRecorder: MediaRecorder

export function StartStreamButton() {
    const { youtubeBroadcast, platforms } = useContext(BroadcastInformationsContext)
    const { canvasStream, audioStream } = useCanvasContext()
    const [isLive, setIsLive] = useState(false)
    const [liveFinished, setLiveFinished] = useState(false)
    let isLiveEmit = false

    const handleStartOrEndLive = () => {
        if (mediaRecorder === undefined) {
            const options = { audioBitsPerSecond: 100000, videoBitsPerSecond: 4000000 };
            mediaRecorder = new MediaRecorder(canvasStream, options);
        }

        if (!isLive) {
            startLive()
        } else {
            endLive()
        }

    }



    const startLive = async () => {

        setIsLive(true)
        isLiveEmit = true

        socket.emit('config_rtmpDestination', platforms)//youtubeBroadcast.rtmpUrl
        socket.emit('start', 'start')

        if (canvasStream) {
            if (audioStream) {
                for (const track of audioStream.getTracks()) {
                    canvasStream?.addTrack(track)
                }
            }

            mediaRecorder.ondataavailable = function (e) {
                if (!isLiveEmit) {
                    return
                }
                socket.emit("binarystream", e.data);
            }



            mediaRecorder.start(10);
        }
    }

    const endLive = async () => {
        setIsLive(false)
        setLiveFinished(true)

        canvasStream.getTracks().forEach(track => track.stop())

        //socket.emit('stopBroadcast','stopBroadcast')
        socket.disconnect()
        socket.close()

        const endAllBroadcasts = endBroadcast()
        await endAllBroadcasts.endYoutubeLive()

    }

    

    window.onbeforeunload = () => {
        window.onclose = () => endLive()
    }
    window.onclose = () => endLive()


    return (
        <>
            {liveFinished === false && (
                <Container onClick={handleStartOrEndLive} style={{ backgroundColor: `${!isLive ? themes.colors.pink[500] : themes.colors.error}` }}>
                    <RiBroadcastFill fontSize="1.5rem" />
                    {isLive ? 'End broadcast' : 'Start broadcast'}
                </Container>
            )}
        </>
    )


}