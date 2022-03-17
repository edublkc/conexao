import { Link } from "react-router-dom"

import { useContext } from "react"
import { firebaseAuthContext } from "../../../context/firebaseAuthContext"

import { Container } from "./styled"

import { SignoutButton } from "../../SingoutButton"

import { SyncLoader } from "react-spinners"



export function MAHeader() {
    const { authenticated, loadingInformations } = useContext(firebaseAuthContext)

    return (
        <Container>
            <div className="wrapper">
                <div className="left-side">
                    <Link to="/myaccount/platforms">
                        <h1>CONEXÃO</h1>
                    </Link>
                </div>

                <div className="center">
                </div>

                <div className="right-side">
                    {loadingInformations && <SyncLoader color={'#fff'} loading={loadingInformations} size={5} />}
                    {!loadingInformations && authenticated &&
                        <>
                            <SignoutButton />
                        </>
                        }
                </div>
            </div>
        </Container>
    )
}