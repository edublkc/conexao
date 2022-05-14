import { useContext } from "react"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"
import {Container} from "./styled"
import {TiSocialYoutubeCircular} from "react-icons/ti"
import { themes } from "../../../styles/themes"

export function YoutubeLiveLink(){
   const {youtubeBroadcast} = useContext(BroadcastInformationsContext)
   
    return(
        <Container href={youtubeBroadcast.liveLink} target='_blank'>
            <TiSocialYoutubeCircular color={themes.colors.platforms.Youtube} fontSize={40}/>
        </Container>

    )
}