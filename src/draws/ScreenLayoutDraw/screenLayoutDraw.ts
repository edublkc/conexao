import { canvasHeight, canvasWidth, setScreenLayoutPositions } from "../positionsDraw";

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
                cameraX1: 700,
                cameraY1: 393
            })

            break;

        case 'screenOnly':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: 700,
                screenY1: 393,

                cameraX0: 0,
                cameraY0: 0,
                cameraX1: 0,
                cameraY1: 0
            })

            break;

        case 'bottomRight':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: .625 * canvasWidth,
                cameraY0: .625 * canvasHeight,
                cameraX1: canvasWidth / 3,
                cameraY1: canvasHeight / 3
            })

            break;

        case 'bottomLeft':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: 28,
                cameraY0: .625 * canvasHeight,
                cameraX1: canvasWidth / 3,
                cameraY1: canvasHeight / 3,
            })

            break;

        case 'topRight':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: .625 * canvasWidth,
                cameraY0: 15,
                cameraX1: canvasWidth / 3,
                cameraY1: canvasHeight / 3,
            })

            break;

        case 'topLeft':
            setScreenLayoutPositions({
                screenX0: 0,
                screenY0: 0,
                screenX1: canvasWidth,
                screenY1: canvasHeight,

                cameraX0: 15,
                cameraY0: 15,
                cameraX1: canvasWidth / 3,
                cameraY1: canvasHeight / 3,
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
            })

            break;

    }
}