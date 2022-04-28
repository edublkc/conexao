import { canvasHeight, canvasWidth, setCameraSize, setScreenLayoutPositions } from "../positionsDraw";


export interface CurrentCameraSize{
    currentCameraSize: string
    cameraWidth: number 
    cameraHeight: number 
}

export var currentCameraSize: CurrentCameraSize = {
    currentCameraSize: 'small',
    cameraWidth: canvasWidth / 4,
    cameraHeight: canvasHeight / 4
}

export function setSelectedScreenLayout(layout: string) {
    switch (layout) {
        case 'cameraOnly':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: 0,
                screenY1: 0,

                cameraX0: 0,
                cameraY0: 0,
                cameraX1: canvasWidth,
                cameraY1: canvasHeight,

                currentLayout: 'cameraOnly'
            })

            break;

        case 'screenOnly':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: 0,
                cameraY0: 0,
                cameraX1: 0,
                cameraY1: 0,

                currentLayout: 'screenOnly'
            })

            break;

        case 'bottomRight':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: canvasWidth - currentCameraSize.cameraWidth - 10,
                cameraY0: canvasHeight - currentCameraSize.cameraHeight - 10,
                cameraX1: currentCameraSize.cameraWidth,
                cameraY1: currentCameraSize.cameraHeight,

                currentLayout: 'bottomRight'
            })

            break;

        case 'bottomLeft':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: 10,
                cameraY0: canvasHeight - currentCameraSize.cameraHeight - 10,
                cameraX1: currentCameraSize.cameraWidth,
                cameraY1: currentCameraSize.cameraHeight,

                currentLayout: 'bottomLeft'
            })

            break;

        case 'topRight':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: canvasWidth - currentCameraSize.cameraWidth - 10,
                cameraY0: 10,
                cameraX1: currentCameraSize.cameraWidth,
                cameraY1: currentCameraSize.cameraHeight,

                currentLayout: 'topRight'
            })

            break;

        case 'topLeft':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: 10,
                cameraY0: 10,
                cameraX1: currentCameraSize.cameraWidth,
                cameraY1: currentCameraSize.cameraHeight,

                currentLayout: 'topLeft'
            })

            break;

        case 'sideBySide':
            setScreenLayoutPositions({
                screenX0: canvasWidth * 0.20,
                screenY0: canvasHeight * 0.1,
                screenX1: canvasWidth * 0.8,
                screenY1: canvasHeight * 0.8,

                cameraX0: canvasWidth * 0.01,
                cameraY0: canvasHeight * 0.38,
                cameraX1: canvasWidth * 0.18,
                cameraY1: canvasHeight * 0.24,

                currentLayout: 'sideBySide'
            })

            break;

    }
}


export function changeCameraSize(size: string){
   switch(size){
        case 'small':
            currentCameraSize.cameraWidth = canvasWidth / 4
            currentCameraSize.cameraHeight = canvasHeight / 4
            currentCameraSize.currentCameraSize = 'small'

            setCameraSize(currentCameraSize)
        break;

        case 'normal':
            currentCameraSize.cameraWidth = canvasWidth / 3
            currentCameraSize.cameraHeight = canvasHeight / 3
            currentCameraSize.currentCameraSize = 'normal'

            
            setCameraSize(currentCameraSize)
        break;

        case 'big':
            currentCameraSize.cameraWidth = canvasWidth / 2
            currentCameraSize.cameraHeight = canvasHeight / 2
            currentCameraSize.currentCameraSize = 'big'


            setCameraSize(currentCameraSize)
        break;
    }

    
}