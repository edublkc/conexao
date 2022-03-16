import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth"


interface FirebaseAuthProviderProps {
    children: ReactNode
}

interface MyUser{
    authenticated: boolean
    user?: User | null
    loadingInformations: boolean
}

export const firebaseAuthContext = createContext({} as MyUser)


export const FirebaseAuthProvider = ({children}:FirebaseAuthProviderProps) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [user,setUser] = useState<User | null>(null)
    const [loadingInformations, setLoadingInformations] = useState(true)

    const auth = getAuth()

    useEffect(()=>{
        isAuth()
    },[auth])

    const isAuth = onAuthStateChanged(auth,(firebaseUser)=>{
        if(firebaseUser){
            setUser(firebaseUser)
            setLoadingInformations(false)
            setAuthenticated(true)
    
        }else{
            setUser(null)
            setAuthenticated(false)
            setLoadingInformations(false)
        }
    })

    

    return (
        <firebaseAuthContext.Provider value={{ authenticated,user,loadingInformations }}>{children}</firebaseAuthContext.Provider>
    )
}