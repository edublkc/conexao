import { createContext, ReactNode, useState } from "react";
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

type PlatformsContext = {
    platforms: Platform[]
    setPlatform: React.Dispatch<any>

    broadcastInformations: BroadcastInformations,
    setBroadcastInformations: React.Dispatch<any>,

    youtubeBroadcast: streamInformations,
    setYoutubeBroadcast: React.Dispatch<any>
}

export const BroadcastInformationsContext = createContext({} as PlatformsContext)

export function BroadcastInformationsContextProvider({ children }: PlatformsContextProvider) {
    const [platforms, setPlatform] = useState([])

    const [broadcastInformations, setBroadcastInformations] = useState({} as BroadcastInformations)

    const [youtubeBroadcast, setYoutubeBroadcast] = useState({} as streamInformations)

    return (
        <BroadcastInformationsContext.Provider value={
            {
                platforms,
                setPlatform,
                broadcastInformations,
                setBroadcastInformations,
                youtubeBroadcast,
                setYoutubeBroadcast
            }}>
            {children}
        </BroadcastInformationsContext.Provider>
    )
}