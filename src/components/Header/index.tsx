import { Link, NavLink } from "react-router-dom"

import { useContext } from "react"
import { firebaseAuthContext } from "../../context/firebaseAuthContext"

import { Container } from "./styled"

import { SingInButton } from "../SingInButton"
import { SignupButton } from "../SignupButton"
import { MyAccountButton } from "../MyAccountButton"

import { SyncLoader } from "react-spinners"
import { SignoutButton } from "../SingoutButton"


export function Header() {
    const { authenticated, loadingInformations } = useContext(firebaseAuthContext)

    return (
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
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/more">
                                    Saiba mais
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div className="right-side">

                    {loadingInformations && <SyncLoader color={'#fff'} loading={loadingInformations} size={5} />}

                    {!loadingInformations && authenticated &&
                        <>
                            <MyAccountButton />
                            <SignoutButton />
                        </>
                    }

                    {!loadingInformations && !authenticated &&
                        <>
                            <SingInButton />
                            <SignupButton />
                        </>
                    }

                </div>
            </div>
        </Container>
    )
}