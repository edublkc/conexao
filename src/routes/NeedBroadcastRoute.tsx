import React,{useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { BroadcastInformationsContext } from "../context/broadcastInformationsContext";


interface Props {
    children?: React.ReactNode
}

export function NeedBroadcastRoute({children}: Props) {
    const navigate = useNavigate()
    const {broadcastCreated} = useContext(BroadcastInformationsContext)

    useEffect(()=>{
        if(broadcastCreated){
            
        }else{
            navigate('/')
        }

        return () => {}
    },[])

    return <>{children}</>
   
}