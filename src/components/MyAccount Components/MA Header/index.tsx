import { Link, useParams} from "react-router-dom"

import { useContext } from "react"
import { firebaseAuthContext } from "../../../context/firebaseAuthContext"

import { Container } from "./styled"

import { SignoutButton } from "../../SingoutButton"

import { SyncLoader } from "react-spinners"
import { StartStreamButton } from "../../Studio Components/ST StartStreamButton"



export function MAHeader() {
    const { authenticated, loadingInformations } = useContext(firebaseAuthContext)
    const pathName = window.location.pathname
    const currentPageIsStudio = pathName.includes('studio')

    return (
        <Container>
            <div className="wrapper">
                <div className="left-side">
                    <Link to="/myaccount/platforms">
                        <h1>CONNECTION</h1>
                    </Link>
                </div>

                <div className="center">
                </div>

                <div className="right-side">
                    {loadingInformations && <SyncLoader color={'#fff'} loading={loadingInformations} size={5} />}
                    {!loadingInformations && authenticated && !currentPageIsStudio && <SignoutButton />}
                    {!loadingInformations && authenticated && currentPageIsStudio && <StartStreamButton />}
                </div>
            </div>
        </Container>
    )
}