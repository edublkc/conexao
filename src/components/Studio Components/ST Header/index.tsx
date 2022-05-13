import { StartStreamButton } from "../ST StartStreamButton";
import { Container } from "./styled";


export function STHeader() {
    return (
        <Container>
            <h1>
                CONNECTION
            </h1>

            <div className="options">
                <StartStreamButton />
            </div>
        </Container>
    )
}

//<StartStreamButton/>