import { Link, NavLink } from "react-router-dom"

import { useContext, useState } from "react"
import { firebaseAuthContext } from "../../context/firebaseAuthContext"

import { Container } from "./styled"

import { SingInButton } from "../SingInButton"
import { SignupButton } from "../SignupButton"
import { MyAccountButton } from "../MyAccountButton"

import { SyncLoader } from "react-spinners"
import { SignoutButton } from "../SingoutButton"


export function Header() {
    const { authenticated, loadingInformations } = useContext(firebaseAuthContext)

    const [isScrollDown,setIsScrollDown] = useState(false)

    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 130){
            setIsScrollDown(true)
        }else{
            setIsScrollDown(false)
        }

        
    })
    

    return (
        <Container className={isScrollDown ? 'bgScroll' : ''}>
            <div className="wrapper">
                <div className="left-side">
                    <Link to="/">
                        <h1>CONNECTION</h1>
                    </Link>
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

/*
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
*/