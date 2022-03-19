import { createContext, ReactNode, useState } from "react";

interface PlatformsContextProvider {
    children: ReactNode
}

type PlatformsContext = {
    youtube: {
        name: string
        acessToken: string,
        avatar: string
    },
    setYoutube: React.Dispatch<any>

}

export const PlatformsContext = createContext<PlatformsContext>({} as PlatformsContext)


export function PlatformsContextProvider({children}: PlatformsContextProvider){
    const [youtube, setYoutube] = useState({
        name: '',
        acessToken: '',
        avatar: ''
    })


    return(
        <PlatformsContext.Provider value={{youtube,setYoutube}}>
            {children}
        </PlatformsContext.Provider>
    )
}