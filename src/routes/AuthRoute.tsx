import React,{useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth"


interface Props {
    children?: React.ReactNode
}

export function AuthRoute({children}: Props) {
    const navigate = useNavigate()
    const auth = getAuth()

    useEffect(()=>{
      onAuthStateChanged(auth,(firebaseUser)=>{
            if(firebaseUser){
        
            }else{
                navigate('/')
            }
        })
    },[auth])

    return <>{children}</>
   
}