import { Rect, shapes } from "./shapesDraw"

interface ResizableSquare {
        x: number,
        y: number,
        w: number,
        h: number,
        color: string
}

let selectedShape: Rect | null = null
export let resizableSquare: ResizableSquare | null

export function setCanvasReferenceInShapeMouseEvents(canvasReference: React.MutableRefObject<HTMLCanvasElement>){
    let isDown = false


    canvasReference.current.addEventListener('mousedown',(e)=>{
       //selectedShape = getPressedSelectedShape(e)
       isDown = true
        if(selectedShape != null && isDown){
            selectedShape.offset={
                x: e.offsetX - selectedShape.x,
                y: e.offsetY - selectedShape.y
            }
            
        }

       
    })
    
    canvasReference.current.addEventListener('mousemove',(e)=>{
        if(selectedShape != null && isDown){
            selectedShape.x = e.offsetX - selectedShape.offset.x
            selectedShape.y = e.offsetY - selectedShape.offset.y

            resizableSquare = {
                h: selectedShape.height+ 20,
                w: selectedShape.width + 20,
                x: selectedShape.x - 10,
                y: selectedShape.y - 10,
                color: "blue"
            }
        }
    })
    
   
    canvasReference.current.addEventListener('click',(e)=>{
        selectedShape = getPressedSelectedShape(e)


        if(selectedShape != null){
            selectedShape.offset={
                x: e.offsetX - selectedShape.x,
                y: e.offsetY - selectedShape.y
            }

            resizableSquare = {
                h: selectedShape.height+ 20,
                w: selectedShape.width + 20,
                x: selectedShape.x - 10,
                y: selectedShape.y - 10,
                color: "blue"
            }
            console.log(selectedShape)
        }else{
            resizableSquare = null
        }

        
    })

    canvasReference.current.addEventListener('mouseup',()=>{
        selectedShape = null
        isDown = false
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