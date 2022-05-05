import { createContext, ReactNode, useState } from "react";
import { streamInformations } from "../services/createYoutubeLive";


interface PlatformsContextProvider {
    children: ReactNode
}

export interface Platform {
    name: string
    accessToken: string,
    avatar: string,
    platformName: string,
    selected: boolean,
    ingestionUrl: string
}

interface BroadcastInformations {
    title: string,
    description: string,
    privacity: string,
    liveCreated: boolean
}

type PlatformsContext = {
    platforms: Platform[]
    setPlatform: React.Dispatch<Platform[]>

    broadcastInformations: BroadcastInformations,
    setBroadcastInformations: React.Dispatch<any>,

    youtubeBroadcast: streamInformations,
    setYoutubeBroadcast: React.Dispatch<any>

    twitchBroadcast: TwitchBroadcast
    setTwitchBroadcast: React.Dispatch<TwitchBroadcast>
}

interface TwitchBroadcast {
    rtmpUrl: string
    streamKey: string
    ingestionUrl: string
}

export const BroadcastInformationsContext = createContext({} as PlatformsContext)

export function BroadcastInformationsContextProvider({ children }: PlatformsContextProvider) {
    const [platforms, setPlatform] = useState([] as Platform[])

    const [broadcastInformations, setBroadcastInformations] = useState({} as BroadcastInformations)

    const [youtubeBroadcast, setYoutubeBroadcast] = useState({} as streamInformations)
    const [twitchBroadcast,setTwitchBroadcast] = useState({} as TwitchBroadcast)


    return (
        <BroadcastInformationsContext.Provider value={
            {
                platforms,
                setPlatform,
                broadcastInformations,
                setBroadcastInformations,
                youtubeBroadcast,
                setYoutubeBroadcast,
                twitchBroadcast,
                setTwitchBroadcast
            }}>
            {children}
        </BroadcastInformationsContext.Provider>
    )
}