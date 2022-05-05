import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SelectDevices } from "../../components/Studio Components/ST SelectDevices";
import { BroadcastInformationsContext } from "../../context/broadcastInformationsContext";
import { Container } from "./styled";

export function Settings(){
    

    return(
        <Container>
            <SelectDevices/>
        </Container>
    )
}