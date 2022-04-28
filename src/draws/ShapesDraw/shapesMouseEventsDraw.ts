import { useState } from 'react';
import { Rect, shapes } from "./shapesDraw"

interface ResizableSquare {
    x: number,
    y: number,
    w: number,
    h: number,
    color: string
    corners: {
        topLeft: {
            x: number,
            y: number,
            width: number,
            height: number,
            color: string
        },
        bottomLeft: {
            x: number,
            y: number,
            width: number,
            height: number,
            color: string
        },
        topRight: {
            x: number,
            y: number,
            width: number,
            height: number,
            color: string
        },
        bottomRight: {
            x: number,
            y: number,
            width: number,
            height: number,
            color: string
        }
    }
}

export let selectedShape: Rect | null = null
export let resizableSquare: ResizableSquare | null

export function setCanvasReferenceInShapeMouseEvents(canvasReference: React.MutableRefObject<HTMLCanvasElement>) {
    let isDown = false


    canvasReference.current.addEventListener('mousedown', (e) => {
        //selectedShape = getPressedSelectedShape(e)

        isDown = true
        if (selectedShape != null && isDown) {
            selectedShape.offset = {
                x: e.offsetX - selectedShape.x,
                y: e.offsetY - selectedShape.y
            }
        }
    })

    canvasReference.current.addEventListener('mousemove', (e) => {
        if (selectedShape != null && isDown) {
            selectedShape.x = e.offsetX - selectedShape.offset.x
            selectedShape.y = e.offsetY - selectedShape.offset.y
            setResizibleSquareInToCanvas()
        }
    })


    canvasReference.current.addEventListener('click', (e) => {
        selectedShape = getPressedSelectedShape(e)

        if (selectedShape != null) {
            selectedShape.offset = {
                x: e.offsetX - selectedShape.x,
                y: e.offsetY - selectedShape.y
            }
            setResizibleSquareInToCanvas()
        } else {
            resizableSquare = null
            selectedShape = null
        }


    })

    canvasReference.current.addEventListener('mouseup', () => {
        selectedShape = null
        isDown = false
    })



    function getPressedSelectedShape(e: MouseEvent) {
        var mouseX = e.offsetX
        var mouseY = e.offsetY
        for (let i = 0; i < shapes.length; i++) {
            if (mouseX > shapes[i].x && mouseX < shapes[i].x + shapes[i].width &&
                mouseY > shapes[i].y && mouseY < shapes[i].y + shapes[i].height) {
                return shapes[i]
            }
        }

        return null
    }
}

export function setResizibleSquareInToCanvas() {
    if (selectedShape != null) {
        let resizableSquareHeight = selectedShape.height + 2
        let resizableSquareWidth = selectedShape.width + 2
        let resizableSquareX = selectedShape.x - 1
        let resizableSquareY = selectedShape.y - 1

        resizableSquare = {
            h: resizableSquareHeight,
            w: resizableSquareWidth,
            x: resizableSquareX,
            y: resizableSquareY,
            color: "blue",
            corners: {
                topLeft: {
                    x: resizableSquareX - 2,
                    y: resizableSquareY - 2,
                    width: 10,
                    height: 10,
                    color: 'white'
                },
                bottomLeft: {
                    x: resizableSquareX -2,
                    y: resizableSquareY + resizableSquareHeight - 8,
                    width: 10,
                    height: 10,
                    color: 'white'
                },
                topRight: {
                    x: resizableSquareX + resizableSquareWidth - 8,
                    y: resizableSquareY - 2,
                    width: 10,
                    height: 10,
                    color: 'white'
                },
                bottomRight: {
                    x: resizableSquareWidth + resizableSquareX - 8,
                    y: resizableSquareHeight + resizableSquareY - 8,
                    width: 10,
                    height: 10,
                    color: 'white'
                }
            }
        }
    }else{
        selectedShape = null
    }

}

export function setResizibleSquareNull(){
    resizableSquare = null
}

export function setSelectedShapeNull(){
    selectedShape = null
}