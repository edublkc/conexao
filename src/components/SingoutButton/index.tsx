import { Container } from "./styled"
import { Link } from "react-router-dom"
import { logout } from "../../services/firebase/firebaseAuthConfig"

export function SignoutButton() {
    return (
        <Container>
            <Link to="/" onClick={logout}>
                Sair
            </Link>
        </Container>
    )
}