import { useEffect, useState } from "react";
import { shapes, Rect } from "../../../../draws/ShapesDraw/shapesDraw";
import { themes } from "../../../../styles/themes";
import { TabMenu } from "../../../TabMenu";
import { Container, Content } from "./styled";
import { v4 as uuidv4 } from 'uuid';
import { selectedShape } from "../../../../draws/ShapesDraw/shapesMouseEventsDraw";

const tabOptions = ['Shapes', 'Desgin']

export function Shapes() {
    const [selectedTabOption, setSelectedTabOption] = useState(tabOptions[0])

    const [isSomeSelectedShape, setIsSomeSelectedShape] = useState(false)


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

    function checkIfHasSomeShapeSelected() {
        if (selectedShape) {
            return true
        } else {
            return false
        }
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
                        {!checkIfHasSomeShapeSelected() ? <><p>Select some shape</p></> : (
                            <section>
                                <h3 className="contentTitle">Color</h3>
                                <input type="color" />
                            </section>
                        )}
                    </>
                )}
            </Content>

        </Container>

    )
}

