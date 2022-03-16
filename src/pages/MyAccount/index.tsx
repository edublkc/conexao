import { getAuth, signOut } from "firebase/auth";
import { firebaseAuthContext } from "../../context/firebaseAuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function MyAccount() {
    const auth = getAuth();
    const {authenticated,user} = useContext(firebaseAuthContext)
    console.log(user)
    const navigate = useNavigate()

    return (
        <div>
            LOGADO
            <button onClick={() => {
                signOut(auth).then(() => {
                    navigate('/')
                }).catch((error) => {
                    // An error happened.
                });
            }}>SAIR</button>
        </div>
    )
}