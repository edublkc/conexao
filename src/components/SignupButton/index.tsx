import { Container } from "./styled"
import { Link } from "react-router-dom"

export function SignupButton() {
    return (
        <Container>
            <Link to="/singup">
                Cadastre-se
            </Link>
        </Container>
    )
}