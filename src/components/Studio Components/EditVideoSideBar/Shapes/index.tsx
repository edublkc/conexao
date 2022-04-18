import { useEffect, useState } from "react";
import { shapes, Rect } from "../../../../draws/ShapesDraw/shapesDraw";
import { themes } from "../../../../styles/themes";
import { TabMenu } from "../../../TabMenu";
import { Container, Content } from "./styled";

const tabOptions = ['Shapes', 'Brand']

export function Shapes() {
    const [selectedTabOption, setSelectedTabOption] = useState(tabOptions[0])

    function handleCreateFillSquare(){
        const fillSquare = new Rect({
            height: 100,
            width: 100,
            color: themes.colors.pink[200]
        })

        shapes.push(fillSquare)
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

                            <div className="squares">
                                <div className="fillSquare" onClick={handleCreateFillSquare}>

                                </div>
                            </div>
                        </section>
                    </>
                )}

                {selectedTabOption === tabOptions[1] && (
                    <>
                    </>
                )}
            </Content>

        </Container>

    )
}

