import { useEffect, useState } from "react";
import { shapes, Rect } from "../../../../draws/ShapesDraw/shapesDraw";
import { themes } from "../../../../styles/themes";
import { TabMenu } from "../../../TabMenu";
import { Container, Content } from "./styled";
import { v4 as uuidv4 } from 'uuid';
import { useCanvasContext } from "../../../../context/canvasContext";

import { MdAlignHorizontalLeft, MdAlignHorizontalCenter, MdAlignHorizontalRight, MdAlignVerticalTop, MdAlignVerticalCenter, MdAlignVerticalBottom } from "react-icons/md"
import { resizableSquare, selectedShape, setResizibleSquareInToCanvas } from "../../../../draws/ShapesDraw/shapesMouseEventsDraw";
import { canvasHeight, canvasWidth } from "../../../../draws/positionsDraw";

const tabOptions = ['Shapes', 'Desgin']

export function Shapes() {
    const [selectedTabOption, setSelectedTabOption] = useState(tabOptions[0])
    const { isSomeSelectedShape,setIsSomeSelectedShape} = useCanvasContext()



    function handleCreateFillSquare() {
        let newId = uuidv4();

        const fillSquare = new Rect({
            id: newId,
            height: 100,
            width: 100,
            color: themes.colors.blueGray[100]
        })

        shapes.push(fillSquare)
    }



    function handleChangePositionY(e: React.ChangeEvent<HTMLInputElement>){
        let number = removeFirstZeroInInputNumber(e.target.value)
        e.target.value = number
        
        if(isSomeSelectedShape && selectedShape && resizableSquare ){
            selectedShape.y = Number(e.target.value)
            setResizibleSquareInToCanvas()
            setIsSomeSelectedShape({...isSomeSelectedShape,y: selectedShape.y})
        }
    }

    function handleChangePositionX(e: React.ChangeEvent<HTMLInputElement>){
        let number = removeFirstZeroInInputNumber(e.target.value)
        e.target.value = number

        if(isSomeSelectedShape && selectedShape && resizableSquare ){
            selectedShape.x = Number(e.target.value)
            setResizibleSquareInToCanvas()
            setIsSomeSelectedShape({...isSomeSelectedShape,x: selectedShape.x})
        }
    }



    function handleAlignLeft(){
        if(isSomeSelectedShape && selectedShape && resizableSquare ){
            selectedShape.x = 0
            setResizibleSquareInToCanvas()
            setIsSomeSelectedShape({...isSomeSelectedShape,x: selectedShape.x})
        }
    }


    function handleAlignTop(){
        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.y = 0
            setResizibleSquareInToCanvas()
            setIsSomeSelectedShape({...isSomeSelectedShape,y: selectedShape.y})
        }
    }

    function handleAlignHorizontalCenter(){
        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.x = canvasWidth/2 - selectedShape.width/2
            setResizibleSquareInToCanvas()
            setIsSomeSelectedShape({...isSomeSelectedShape,x: selectedShape.x})
            
        }
    }

    function handleAlignRight(){
        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.x = canvasWidth - selectedShape.width
            setResizibleSquareInToCanvas()
            setIsSomeSelectedShape({...isSomeSelectedShape,x: selectedShape.x})
        }
    }

    function handleAlignVerticalCenter(){
        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.y = canvasHeight/2 - selectedShape.height/2
            setResizibleSquareInToCanvas()

            setIsSomeSelectedShape({...isSomeSelectedShape,y: selectedShape.y})
        }
    }

    function handleAlignBottom(){
        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.y = canvasHeight - selectedShape.height
            setResizibleSquareInToCanvas()

            setIsSomeSelectedShape({...isSomeSelectedShape,y: selectedShape.y})
        }
    }

    function handleChangeWidthValue(e:React.ChangeEvent<HTMLInputElement>){
        let number = removeFirstZeroInInputNumber(e.target.value)
        e.target.value = number

        let inputValueIsLessThanZero = Number(number) < 0 

        if(inputValueIsLessThanZero){
            e.target.value = '0'
        }

        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.width = Number(e.target.value)
            setResizibleSquareInToCanvas()

            setIsSomeSelectedShape({...isSomeSelectedShape,width: selectedShape.width})
        }
    }

    function handleChangeHeightValue(e: React.ChangeEvent<HTMLInputElement>){
        let number = removeFirstZeroInInputNumber(e.target.value)
        e.target.value = number

        let inputValueIsLessThanZero = Number(number) < 0 

        if(inputValueIsLessThanZero){
            e.target.value = '0'
        }


        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.height = Number(e.target.value)
            setResizibleSquareInToCanvas()

            setIsSomeSelectedShape({...isSomeSelectedShape,height: selectedShape.height})
        }
    }

    function handleChangeShapeColor(e: React.ChangeEvent<HTMLInputElement>){
        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.color = e.target.value
            setResizibleSquareInToCanvas()

            setIsSomeSelectedShape({...isSomeSelectedShape,color: selectedShape.color})
        }
    }

    function handleChangeAlpha(e: React.ChangeEvent<HTMLInputElement>){
        let number = removeFirstZeroInInputNumber(e.target.value)
        e.target.value = number

        let inputValueIsMoreBigThenOneHundred = Number(number) > 100

        if(inputValueIsMoreBigThenOneHundred){
            e.target.value = '100'
        }

        

        if(isSomeSelectedShape && selectedShape && resizableSquare){
            selectedShape.alpha = Number(e.target.value) / 100
            setResizibleSquareInToCanvas()

            setIsSomeSelectedShape({...isSomeSelectedShape,alpha: selectedShape.alpha})
        }
    }

    function removeFirstZeroInInputNumber(value: string){
        let arrayWithNumbers = value.split('')

        if(arrayWithNumbers.length > 1 ){
            if(arrayWithNumbers[0] === '0'){
                return arrayWithNumbers.splice(1).join('')
            }else{
                return arrayWithNumbers.join('')
            }
        }

        return arrayWithNumbers.join('')
    }


    return (
        <Container>

            <TabMenu
                options={tabOptions}
                selectedTabOptionValue={selectedTabOption}
                setSelectedTabOptionState={setSelectedTabOption}
            />

            <Content>
                {selectedTabOption === tabOptions[0] && (
                    <>
                        <section>
                            <h3 className="contentTitle">Shapes</h3>

                            <div className="Allshapes">
                                <div className="fillSquare" onClick={handleCreateFillSquare}></div>
                            </div>
                        </section>
                    </>
                )}

                {selectedTabOption === tabOptions[1] && (
                    <>
                        {!isSomeSelectedShape ? <><p>Select some shape</p></> : (
                            <>
                                <section>
                                    <h3 className="contentTitle">Align</h3>

                                    <div className="alignIcons">
                                        <button type="button" onClick={handleAlignLeft}>
                                            <MdAlignHorizontalLeft />
                                        </button>
                                        <button type="button">
                                            <MdAlignHorizontalCenter onClick={handleAlignHorizontalCenter}/>

                                        </button>
                                        <button type="button">
                                            <MdAlignHorizontalRight onClick={handleAlignRight}/>
                                        </button>

                                        <button type="button" onClick={handleAlignTop}>
                                            <MdAlignVerticalTop />
                                        </button>

                                        <button type="button">
                                            <MdAlignVerticalCenter onClick={handleAlignVerticalCenter}/>
                                        </button>

                                        <button type="button">
                                            <MdAlignVerticalBottom onClick={handleAlignBottom}/>
                                        </button>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="contentTitle">Position</h3>

                                    <div className="inputsNumbers">
                                        <div className="inputNumberWrapper">
                                            <label>X</label>
                                            <input type="number" value={isSomeSelectedShape.x} onChange={(e)=>{handleChangePositionX(e)}}/>
                                        </div>

                                        <div className="inputNumberWrapper">
                                            <label>Y</label>
                                            <input type="number" value={isSomeSelectedShape.y} onChange={(e)=>{handleChangePositionY(e)}}/>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="contentTitle">Size</h3>

                                    <div className="inputsNumbers">
                                        <div className="inputNumberWrapper">
                                            <label>W</label>
                                            <input type="number" value={isSomeSelectedShape.width} onChange={(e)=>{handleChangeWidthValue(e)}}/>
                                        </div>

                                        <div className="inputNumberWrapper">
                                            <label>H</label>
                                            <input type="number" value={isSomeSelectedShape.height} onChange={(e)=>{handleChangeHeightValue(e)}}/>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="contentTitle">Fill</h3>

                                    <div className="fillColors">
                                        <div className="fillColorWrapper">
                                            <input type="color" value={isSomeSelectedShape.color} onChange={(e)=>{handleChangeShapeColor(e)}}/>
                                        </div>

                                        <div className="fillColorWrapper">
                                            <label><input type="number" min={0} max={100} value={isSomeSelectedShape.alpha * 100} onChange={(e)=>{handleChangeAlpha(e)}}/>%</label>
                                        </div>

                                    </div>
                                </section>
                            </>
                        )}
                    </>
                )}
            </Content>

        </Container>

    )
}

