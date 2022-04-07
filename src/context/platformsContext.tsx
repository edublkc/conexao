import { createContext, ReactNode, useState } from "react";
import { string } from "yup";
import { streamInformations } from "../services/createYoutubeLive";


interface PlatformsContextProvider {
    children: ReactNode
}

export interface Platform {
    name: string
    acessToken: string,
    avatar: string,
    platformName: string
}

interface BroadcastInformations {
    title: string,
    description: string,
    privacity: string
}

interface Devices{
    micId: string,
    camId: string
}

interface SelectedMessage{
    displayName: string
    displayMessage: string
    isMessageSelected: boolean
}

type PlatformsContext = {
    platforms: Platform[]
    setPlatform: React.Dispatch<any>
    broadcastInformations: BroadcastInformations,
    setBroadcastInformations: React.Dispatch<any>,
    youtubeBroadcast: streamInformations,
    setYoutubeBroadcast: React.Dispatch<any>
    devices: Devices
    setDevices:  React.Dispatch<any>
    nameToBeDisplayed: string
    setNameToBeDisplayed: React.Dispatch<any>
    canvasStream: MediaStream
    setCanvasStream: React.Dispatch<any>
    audioStream: MediaStream
    setAudioStream: React.Dispatch<any>
    selectedChatMessage: SelectedMessage
    changeSelectedChatMessage: (name:string,message: string,etag:string) => void
    setSelectedChatMessage: React.Dispatch<SelectedMessage>
}

export const PlatformsContext = createContext({} as PlatformsContext)


export let chatETag: string
export let displayMessage: string
export let displayName: string
export let isChatMessageSelected: boolean


export function PlatformsContextProvider({children}: PlatformsContextProvider){
    const [platforms, setPlatform] = useState([])

    const [broadcastInformations,setBroadcastInformations] = useState({} as BroadcastInformations)

    const [youtubeBroadcast,setYoutubeBroadcast] = useState({} as streamInformations)

    const [devices,setDevices] = useState({} as Devices)

    const [nameToBeDisplayed,setNameToBeDisplayed] = useState('')

    const [canvasStream, setCanvasStream] = useState({} as MediaStream)
    const [audioStream,setAudioStream] = useState({} as MediaStream)

    const [selectedChatMessage,setSelectedChatMessage] = useState({
            displayName: '',
            displayMessage: '',
            isMessageSelected: false
    })

    function changeSelectedChatMessage(name:string,message: string,etag: string){
        console.log(etag)
        if(chatETag === etag){
            isChatMessageSelected = false
            chatETag = ''
            displayName = ''
            displayMessage = ''
        }else{
            chatETag = etag
            displayName = name
            displayMessage = message
            isChatMessageSelected = true
        }
        
    }


    return(
        <PlatformsContext.Provider value={{setSelectedChatMessage,selectedChatMessage,changeSelectedChatMessage,audioStream,setAudioStream,canvasStream,setCanvasStream,nameToBeDisplayed,setNameToBeDisplayed,devices,setDevices,platforms,setPlatform,broadcastInformations,setBroadcastInformations,youtubeBroadcast,setYoutubeBroadcast}}>
            {children}
        </PlatformsContext.Provider>
    )
}