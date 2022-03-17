import { Container } from "./styled"
import { Link } from "react-router-dom"

export function MyAccountButton() {
    return (
        <Container>
            <Link to="/myaccount/platforms">
                Minha conta
            </Link>
        </Container>
    )
}