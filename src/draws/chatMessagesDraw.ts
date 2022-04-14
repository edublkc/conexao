import { allChatMessages } from "../components/Studio Components/ST Chat";
import { canvasContext } from "../components/Studio Components/ST MainScreen";
import { displayMessage, displayName } from "../context/canvasContext";
import { themes } from "../styles/themes";
import {  canvasHeight } from "./positionsDraw";


export function drawMessage() {
    if (canvasContext && allChatMessages) {
        console.log('to caindo aqui')
        //Draw Name
        canvasContext.fillStyle = themes.colors.pink[500]
        canvasContext.fillRect(0, canvasHeight - 75, canvasContext?.measureText(displayName).width + 43, 30);

        canvasContext.font = "16px Poppins";
        canvasContext.fillStyle = "#fff";
        canvasContext.fillText(displayName, 5, canvasHeight - 58)

        //Draw Message


        const lines = []


        if (displayMessage.length > 95) {
            canvasContext.fillStyle = '#fff'
            canvasContext.fillRect(0, canvasHeight - 50, canvasContext.measureText(displayMessage).width + 15, 50);

            canvasContext.font = "13px Poppins";
            canvasContext.fillStyle = "#121212";

            const firstLine = displayMessage.substring(0, 95)
            const secondLine = displayMessage.substring(95)
            lines.push(firstLine)
            lines.push(secondLine)

            const lineheight = 20

            for (let i = 0; i < lines.length; i++) {
                canvasContext.fillText(lines[i], 5, canvasHeight - 30 + (i * lineheight));
            }
        } else {
            canvasContext.fillStyle = '#fff'
            canvasContext.fillRect(0, canvasHeight - 50, canvasContext.measureText(displayMessage).width, 25);

            canvasContext.font = "13px Poppins";
            canvasContext.fillStyle = "#121212";

            canvasContext.fillText(displayMessage, 5, canvasHeight - 32.5);
        }
    }
}