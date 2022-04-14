import { canvasContext } from "../components/Studio Components/ST MainScreen"
import { hostNameToBeDisplayed } from "../components/Studio Components/ST SelectDevices"
import { isChatMessageSelected } from "../context/canvasContext"
import { themes } from "../styles/themes"
import { drawMessage } from "./chatMessagesDraw"
import { cameraX0, cameraX1, cameraY0, cameraY1, screenX0, screenX1, screenY0, screenY1 } from "./positionsDraw"
import { canvasHeight, canvasWidth } from "./positionsDraw"
import { stylesCanvasDraw } from "./stylesDraw"

export let canvasReference: React.MutableRefObject<HTMLCanvasElement>

export function drawInCanvas(video: any, ctx: CanvasRenderingContext2D | null, screen: any,canvasReferenceParms: React.MutableRefObject<HTMLCanvasElement>) {
    canvasReference = canvasReferenceParms

    ctx?.clearRect(0,0,canvasWidth,canvasHeight)

    if (ctx) {
        ctx.fillStyle = stylesCanvasDraw.backgroundColor
    }

    ctx?.fillRect(0, 0, canvasWidth, canvasHeight)
    ctx?.drawImage(
        screen,
        screenX0,
        screenY0,
        screenX1,
        screenY1)

    ctx?.drawImage(
        video,
        cameraX0,
        cameraY0,
        cameraX1,
        cameraY1)


    if (canvasContext) {
        if(isChatMessageSelected){
            drawMessage()
        }else{
            renderHostName()
        }
        
    }
    

    setTimeout(drawInCanvas, 15, video, ctx, screen)
}



function renderHostName(){
    if(canvasContext){
        canvasContext.fillStyle = stylesCanvasDraw.nameBackgroundColor

        canvasContext.fillRect(0, canvasHeight - 40, canvasContext?.measureText(hostNameToBeDisplayed).width + 10, 30);

        canvasContext.font = "20px Poppins";
        canvasContext.fillStyle = stylesCanvasDraw.nameTextColor;
        canvasContext.fillText(hostNameToBeDisplayed, 5, canvasHeight - 20)
    }
    
}