import {selectedShape,setSelectedShapeNull, setResizibleSquareNull} from './shapesMouseEventsDraw'
import { shapes } from './shapesDraw'
import { useCanvasContext } from '../../context/canvasContext'

export function setCanvasReferenceInDeleteShape(canvasReference: React.MutableRefObject<HTMLCanvasElement>){

    window.addEventListener('keydown',(e)=>{
        if(e.key === "Delete" || e.keyCode === 46){
            if(selectedShape !== null){
                shapes.forEach((shape,index) =>{
                    if(shape.id === selectedShape?.id){
                        shapes.splice(index,1)
                    }
                })
                setResizibleSquareNull()
                setSelectedShapeNull()
            }
        }
    })

    
}