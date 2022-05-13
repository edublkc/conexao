import { Link } from "react-router-dom"
import { Container } from "./styled"


export function MAAddPlatform() {

    return (
        <Container>
            <Link to="/myaccount/platforms/allplatforms">
                Add platform
            </Link>
        </Container>
    )
}