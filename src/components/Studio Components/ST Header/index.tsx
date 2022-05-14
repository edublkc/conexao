import { StartStreamButton } from "../ST StartStreamButton";
import { YoutubeLiveLink } from "../ST YoutubeLiveLink";
import { Container } from "./styled";


export function STHeader() {
    return (
        <Container>
            <h1>
                CONNECTION
            </h1>

            <div className="options">
                <YoutubeLiveLink/>
                <StartStreamButton />
            </div>
        </Container>
    )
}

//<StartStreamButton/>