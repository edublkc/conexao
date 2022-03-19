import { useContext } from "react"
import { PlatformsContext } from "../../../context/platformsContext"
import { Container } from './styled'

export function MAAddedPlatforms() {
    const { youtube } = useContext(PlatformsContext)

    return (
        <Container>
            {youtube.name !== '' &&
                <>
                    <div className="wrapp">
                        <div className="avatar">
                            <img src={youtube.avatar} />
                        </div>
                        <div className="name">
                            <span>{youtube.name}</span>
                            <span className="platform">Youtube</span>
                        </div>
                    </div>
                    <div className="line"></div>
                </>
            }

        </Container>
    )
}