import { createContext, ReactNode, useContext, useState } from "react";

interface CanvasContextProviderProps {
    children: ReactNode
}

type Devices = {
    micId: string,
    camId: string
}

interface CanvasContextData {
    devices: Devices
    setDevices: React.Dispatch<any>

    nameToBeDisplayed: string
    setNameToBeDisplayed: React.Dispatch<any>

    canvasStream: MediaStream
    setCanvasStream: React.Dispatch<any>

    audioStream: MediaStream
    setAudioStream: React.Dispatch<any>

    changeSelectedChatMessage: (name: string, message: string, etag: string) => void

    chatSpecificMessageTag: string
}

export const CanvasContext = createContext({} as CanvasContextData)


export let chatETag: string
export let displayMessage: string
export let displayName: string
export let isChatMessageSelected: boolean


export function CanvasContextProvider({ children }: CanvasContextProviderProps) {
    const [devices, setDevices] = useState({} as Devices)
    const [nameToBeDisplayed, setNameToBeDisplayed] = useState('')

    const [canvasStream, setCanvasStream] = useState({} as MediaStream)
    const [audioStream, setAudioStream] = useState({} as MediaStream)

    const [chatSpecificMessageTag,setChatSpecificMessageTag] = useState('')

    function changeSelectedChatMessage(name: string, message: string, etag: string) {
        if (chatETag === etag) {
            isChatMessageSelected = false
            chatETag = ''
            setChatSpecificMessageTag('')
            displayName = ''
            displayMessage = ''
        } else {
            setChatSpecificMessageTag(etag)
            chatETag = etag
            displayName = name
            displayMessage = message
            isChatMessageSelected = true
        }
    }


    return (
        <CanvasContext.Provider value={{
            devices,
            setDevices,
            nameToBeDisplayed,
            setNameToBeDisplayed,
            canvasStream,
            setCanvasStream,
            audioStream,
            setAudioStream,
            changeSelectedChatMessage,
            chatSpecificMessageTag
        }}>

            {children}
        </CanvasContext.Provider>
    )
}



export function useCanvasContext() {
    return useContext(CanvasContext)
}