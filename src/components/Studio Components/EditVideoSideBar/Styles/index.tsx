import { useState } from "react";
import { TabMenu } from "../../../TabMenu";
import { Brand } from "./Brand";
import { Container, Content } from "./styled";

const tabOptions = ['Brand']

export function Styles() {
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
                        <Brand/>
                    </>
                )}
            </Content>
        </Container>

    )
}


