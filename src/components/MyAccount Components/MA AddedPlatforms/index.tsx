import { useContext } from "react"
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"
import { themes } from "../../../styles/themes"
import { Container } from './styled'

export function MAAddedPlatforms() {
    const { platforms } = useContext(BroadcastInformationsContext)
    

    return (
        <Container>
            {platforms.map(({name,avatar,platformName}) => (
                <div key={name}>
                    <div className="wrapp">

                        <div className="avatar">
                            <img src={avatar} />
                        </div>

                        <div className="name">
                            <span>{name}</span>
                            <span className={platformName}>{platformName}</span>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
            ))}
        </Container>
    )
}