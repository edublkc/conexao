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


interface setScreenLayoutPositionsValues {
    screenX0:number
    screenY0:number
    screenX1:number
    screenY1:number

    cameraX0:number
    cameraY0:number
    cameraX1:number
    cameraY1:number
}

export function setScreenLayoutPositions(values: setScreenLayoutPositionsValues){
    screenX0 = values.screenX0
    screenY0 = values.screenY0
    screenX1 = values.screenX1
    screenY1 = values.screenY1

    cameraX0 = values.cameraX0
    cameraY0 = values.cameraY0
    cameraX1 = values.cameraX1
    cameraY1 = values.cameraY1
}