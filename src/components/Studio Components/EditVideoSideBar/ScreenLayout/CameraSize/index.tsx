import { useEffect, useState } from "react";
import { changeCameraSize } from "../../../../../draws/ScreenLayoutDraw/screenLayoutDraw";
import { Container } from "./styled";

export function CameraSize(){
    const [cameraSize,setCameraSize] = useState('small')

   

    function handleChangeCameraSize(e: React.ChangeEvent<HTMLSelectElement>){
        setCameraSize(e.target.value)
        changeCameraSize(e.target.value)
    }

    return(
        <Container>
            <select id="cameraSize" value={cameraSize} onChange={(e)=> {handleChangeCameraSize(e)}}>
                <option value="small" >Small</option>
                <option value="normal" >Normal</option>
                <option value="big" >Big</option>
            </select>
        </Container>
    )
}