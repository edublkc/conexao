import { Link } from "react-router-dom"
import { Container } from "./styled"

export function SingInButton() {
    return (
        <Container>
            <Link to="/singup">
                Entrar
            </Link>
        </Container>
    )
}