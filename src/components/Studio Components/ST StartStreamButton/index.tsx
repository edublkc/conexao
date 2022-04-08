import { useContext, useEffect, useState } from "react"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"
import {Container} from "./styled"
import {RiBroadcastFill} from "react-icons/ri"

import { io } from "socket.io-client"
import { useCanvasContext } from "../../../context/canvasContext"
import { endBroadcast } from "../../../services/endLive"
import { themes } from "../../../styles/themes"

const socketOptions = { secure: true, reconnection: true, reconnectionDelay: 1000, timeout: 15000, pingTimeout: 15000, pingInterval: 45000, query: { framespersecond: 15, audioBitrate: 22050 } };
const socket = io('http://localhost:3036', socketOptions)

interface StartStreamButtonProps{
    canvasStream?: MediaStream | undefined
    audioStream: MediaStream | undefined
}

let mediaRecorder: MediaRecorder

export function StartStreamButton(){
    const {youtubeBroadcast} = useContext(BroadcastInformationsContext)
    const {canvasStream,audioStream} = useCanvasContext()
    const [isLive,setIsLive] = useState(false)
    let isLiveEmit = false
   
    
    if(canvasStream){
    }

    const handleStartOrEndLive  = ()  =>{
        if(mediaRecorder === undefined){
            const options = { audioBitsPerSecond: 100000, videoBitsPerSecond: 4000000 };
            mediaRecorder = new MediaRecorder(canvasStream, options);
        }
    
        if(!isLive){
            startLive()
        }else{
            endLive()
        }
    }

    const startLive = async () =>{

        setIsLive(true)
        isLiveEmit = true

        socket.emit('config_rtmpDestination', youtubeBroadcast.rtmpUrl)//youtubeBroadcast.rtmpUrl
        socket.emit('start', 'start')
        
        if(canvasStream){
            if(audioStream){
                for (const track of audioStream.getTracks()) {
                    canvasStream?.addTrack(track)
                }
            }
    
            mediaRecorder.ondataavailable = function (e) {
                if(!isLiveEmit){
                    console.log('to caindo no primeiro')
                    return
                }
                console.log('to caindo no segundo')
                socket.emit("binarystream", e.data);
            }
    
            
            mediaRecorder.start(10);
            console.log(mediaRecorder)
        }
    }

    const endLive = async () =>{
        canvasStream.getTracks().forEach( track => track.stop())
        console.log(mediaRecorder)

        socket.emit('stopBroadcast','stopBroadcast')

        const endAllBroadcasts = endBroadcast()
        await endAllBroadcasts.endYoutubeLive()

    }

    return(
        <Container onClick={handleStartOrEndLive} style={{backgroundColor: `${!isLive ? themes.colors.pink[500] : themes.colors.error}`}}>
            <RiBroadcastFill fontSize="1.5rem"/>
            {isLive ? 'Encerrar Transmissão' : 'Iniciar transmissão'}
        </Container>
    )
}