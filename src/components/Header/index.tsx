import { Link } from "react-router-dom"
import { Container } from "./styled"

import { SingInButton } from "../SingInButton"
import { SignupButton } from "../SignupButton"

export function Header(){
    return(
        <Container>
            <div className="wrapper">
                <div className="left-side">
                    <Link to="/">
                        <h1>CONEXÃO</h1>   
                    </Link>
                </div>

                <div className="center">
                    <nav>
                        <ul>
                            <li>
                                <Link className="active" to="">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    Saiba mais
                                </Link>
                            </li>
                        </ul>    
                    </nav>    
                </div>

                <div className="right-side">
                    <SingInButton/>
                    <SignupButton/>
                </div>
            </div>
        </Container>
    )
}