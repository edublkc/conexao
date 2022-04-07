import { useContext, useEffect, useState } from "react"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"
import {Container} from "./styled"
import {RiBroadcastFill} from "react-icons/ri"

import { io } from "socket.io-client"
import { useCanvasContext } from "../../../context/canvasContext"

const socketOptions = { secure: true, reconnection: true, reconnectionDelay: 1000, timeout: 15000, pingTimeout: 15000, pingInterval: 45000, query: { framespersecond: 15, audioBitrate: 22050 } };
const socket = io('http://localhost:3036', socketOptions)

interface StartStreamButtonProps{
    canvasStream?: MediaStream | undefined
    audioStream: MediaStream | undefined
}

export function StartStreamButton(){
    const {youtubeBroadcast} = useContext(BroadcastInformationsContext)
    const {canvasStream,audioStream} = useCanvasContext()
    const [isLive,setIsLive] = useState(false)



    const startLive  = ()  =>{
        socket.emit('config_rtmpDestination', youtubeBroadcast.rtmpUrl)//youtubeBroadcast.rtmpUrl
        socket.emit('start', 'start')
        var options = { audioBitsPerSecond: 100000, videoBitsPerSecond: 4000000 };
    
        if(canvasStream){
            if(audioStream){
                for (const track of audioStream.getTracks()) {
                    canvasStream?.addTrack(track)
                }
            }
    
            const mediaRecorder = new MediaRecorder(canvasStream, options);
    
            mediaRecorder.ondataavailable = function (e) {
                socket.emit("binarystream", e.data);
            }
    
            console.log(mediaRecorder)
            mediaRecorder.start(10);
        }
    }

    return(
        <Container onClick={startLive}>
            <RiBroadcastFill fontSize="1.5rem"/>
            {isLive ? 'Encerrar Transmissão' : 'Iniciar transmissão'}
        </Container>
    )
}