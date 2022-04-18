
export let shapes:Rect[] = []

let selectedShape: any = null

interface RectProperties{
    width: number
    height: number
    x?: number
    y?: number
    color?: string
}


export class Rect{
    width: number
    height: number
    x: number
    y: number
    color: string

    constructor(properties: RectProperties){
        this.width = properties.width
        this.height = properties.height
        this.x = properties.x || Math.random() * 700
        this.y = properties.y || Math.random() * 393
        this.color = properties.color || "black"
    }
}


export function setCanvasReferenceInShapeEvents(canvasReference: React.MutableRefObject<HTMLCanvasElement>){
   
    canvasReference.current.addEventListener('mousedown',(e)=>{
        selectedShape = getPressedSelectedShape(e)

        if(selectedShape != null){
            selectedShape.offset={
                x: e.offsetX - selectedShape.x,
                y: e.offsetY - selectedShape.y
            }
            
        }
    })
    
    canvasReference.current.addEventListener('mousemove',(e)=>{
        
        if(selectedShape != null){
            selectedShape.x = e.offsetX - selectedShape.offset.x
            selectedShape.y = e.offsetY - selectedShape.offset.y
        }
    })
    
    canvasReference.current.addEventListener('mouseup',()=>{
        selectedShape = null
    })
    
    
    function getPressedSelectedShape(e: MouseEvent){
        var mouseX = e.offsetX
        var mouseY = e.offsetY
        for(let i = 0; i < shapes.length;i++){
            if(mouseX > shapes[i].x && mouseX < shapes[i].x + shapes[i].width &&
                mouseY> shapes[i].y && mouseY < shapes[i].y + shapes[i].height){
                    return shapes[i]
                }
        }
    
        return null
    }
}