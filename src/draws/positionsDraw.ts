import { CurrentCameraSize } from './ScreenLayoutDraw/screenLayoutDraw';
interface setScreenLayoutPositionsValues {
    screenX0:number
    screenY0:number
    screenX1:number
    screenY1:number

    cameraX0:number
    cameraY0:number
    cameraX1:number
    cameraY1:number

    currentLayout: string
}


export let screenX0 = 0;
export let screenY0 = 0;
export let screenX1 = 0
export let screenY1 = 0

export let cameraX0 = 0;
export let cameraY0 = 0;
export let cameraX1 = 700
export let cameraY1 = 393

export let canvasWidth = 700
export let canvasHeight= 393

let currentLayout = "cameraOnly"



export function setScreenLayoutPositions(values: setScreenLayoutPositionsValues){
    screenX0 = values.screenX0
    screenY0 = values.screenY0
    screenX1 = values.screenX1
    screenY1 = values.screenY1

    cameraX0 = values.cameraX0
    cameraY0 = values.cameraY0
    
    
    cameraX1 = values.cameraX1
    cameraY1 = values.cameraY1

    currentLayout = values.currentLayout
}

export function setCameraSize(values: CurrentCameraSize){
    cameraX1 = values.cameraWidth
    cameraY1 = values.cameraHeight

    setCameraPosition()
}

function setCameraPosition(){
    if(currentLayout === 'bottomRight'){
        cameraX0 = canvasWidth - cameraX1 - 10
        cameraY0 = canvasHeight - cameraY1 - 10
    }

    if(currentLayout === 'bottomLeft'){
        cameraX0 = 10
        cameraY0 = canvasHeight - cameraY1 - 10
    }

    if(currentLayout === 'topRight'){
        cameraX0 = canvasWidth - cameraX1 - 10
        cameraY0 = 10
    }

    if(currentLayout === 'topLeft'){
        cameraX0 = 10
        cameraY0 = 10
    }
}