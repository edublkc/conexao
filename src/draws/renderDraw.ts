import { canvasContext } from "../components/Studio Components/ST MainScreen"
import { hostNameToBeDisplayed } from "../components/Studio Components/ST SelectDevices"
import { isChatMessageSelected } from "../context/canvasContext"
import { themes } from "../styles/themes"
import { drawMessage } from "./ChatDraw/chatMessagesDraw"
import { cameraX0, cameraX1, cameraY0, cameraY1, screenX0, screenX1, screenY0, screenY1 } from "./positionsDraw"
import { canvasHeight, canvasWidth } from "./positionsDraw"
import { shapes } from "./ShapesDraw/shapesDraw"
import { resizableSquare } from "./ShapesDraw/shapesMouseEventsDraw"
import { stylesCanvasDraw } from "./StylesDraw/stylesDraw"
import * as workerInterval from 'worker-interval';
 


export let canvasReference: React.MutableRefObject<HTMLCanvasElement>


export function drawInCanvas(video: any, ctx: CanvasRenderingContext2D | null, screen: any, canvasReferenceParms: React.MutableRefObject<HTMLCanvasElement>) {
    canvasReference = canvasReferenceParms

    ctx?.clearRect(0, 0, canvasWidth, canvasHeight)

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
        if (isChatMessageSelected) {
            drawMessage()
        } else {
            renderHostName()
            renderShapes()
            renderResizibleSquare()
        }

    }

    //window.requestAnimationFrame(() => drawInCanvas(video, ctx, screen, canvasReferenceParms))

       setTimeout(drawInCanvas, 10, video, ctx, screen)

}



function renderHostName() {
    if (canvasContext) {
        canvasContext.fillStyle = stylesCanvasDraw.nameBackgroundColor

        canvasContext.fillRect(0, canvasHeight - 40, canvasContext?.measureText(hostNameToBeDisplayed).width + 10, 30);

        canvasContext.font = "20px Poppins";
        canvasContext.fillStyle = stylesCanvasDraw.nameTextColor;
        canvasContext.fillText(hostNameToBeDisplayed, 5, canvasHeight - 20)
    }
}

function renderShapes() {
    if (canvasContext) {
        for (let i in shapes) {
            canvasContext.globalAlpha = shapes[i].alpha
            canvasContext.fillStyle = shapes[i].color
            canvasContext.fillRect(shapes[i].x, shapes[i].y, shapes[i].width, shapes[i].height)

            canvasContext.globalAlpha = 1

            canvasContext.save();
            canvasContext.scale(1, 3);
            canvasContext.beginPath();
            canvasContext.arc(72, 130, 25, 0, 2 * Math.PI);
            canvasContext.fill();
            canvasContext.restore();
        }
    }
}

function renderResizibleSquare() {
    if (resizableSquare && canvasContext) {
        canvasContext.strokeStyle = themes.colors.pink[500]
        canvasContext.lineWidth = 2;
        canvasContext.strokeRect(resizableSquare.x, resizableSquare.y, resizableSquare.w, resizableSquare.h)


        //CORNERS RESIZER
        /*
        canvasContext.strokeStyle  =  themes.colors.pink[500]
        canvasContext.fillStyle = "white"
        canvasContext.fillRect(resizableSquare.corners.topLeft.x,resizableSquare.corners.topLeft.y,resizableSquare.corners.topLeft.width,resizableSquare.corners.topLeft.height)

        canvasContext.fillStyle = "white"
        canvasContext.fillRect(resizableSquare.corners.bottomLeft.x,resizableSquare.corners.bottomLeft.y,resizableSquare.corners.bottomLeft.width,resizableSquare.corners.bottomLeft.height)

        canvasContext.fillStyle = "white"
        canvasContext.fillRect(resizableSquare.corners.topRight.x,resizableSquare.corners.topRight.y,resizableSquare.corners.topRight.width,resizableSquare.corners.bottomLeft.height)

        canvasContext.fillStyle = "white"
        canvasContext.fillRect(resizableSquare.corners.bottomRight.x,resizableSquare.corners.bottomRight.y,resizableSquare.corners.bottomRight.width,resizableSquare.corners.bottomLeft.height)
        */
    }
}