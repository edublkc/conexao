import { canvasWidth, canvasHeight } from "../positionsDraw"

export let shapes:Rect[] = []

interface RectProperties{
    id: string
    width: number
    height: number
    x?: number
    y?: number
    color?: string
}

export class Rect{
    id: string
    width: number
    height: number
    x: number
    y: number
    color: string
    offset:{
        x: number,
        y: number
    }

    constructor(properties: RectProperties){
        this.id = properties.id
        this.width =  properties.width
        this.height = properties.height
        this.x = properties.x || canvasWidth/2 - this.width/2
        this.y = properties.y || canvasHeight/2 - this.height/2
        this.color = properties.color || "black"
        this.offset = {
            x: 0,
            y: 0
        }
    }
}

