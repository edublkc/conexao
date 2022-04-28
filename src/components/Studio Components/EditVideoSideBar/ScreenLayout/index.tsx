import { useState } from "react";
import { TabMenu } from "../../../TabMenu";
import { Container, Content } from "./styled";
import { Layouts } from "./Layouts";
import { CameraSize } from "./CameraSize";


const tabOptions = ['Layouts', 'Configurations']

export function ScreenLayout() {
    const [selectedTabOption, setSelectedTabOption] = useState(tabOptions[0])

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
                            <h3 className="contentTitle">Sharing screen</h3>
                            <Layouts />
                        </section>

                    </>

                )}

                {selectedTabOption === tabOptions[1] && (
                    <>
                        <section>
                            <h3 className="contentTitle">Camera size</h3>
                            <CameraSize/>
                        </section>
                    </>
                )}
            </Content>

        </Container>

    )
}
