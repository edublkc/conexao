import { useState } from "react";
import { TabMenu } from "../../../TabMenu";
import { Container, Content } from "./styled";

const tabOptions = ['Themes', 'Brand']

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
                        <section>
                            <h3 className="contentTitle">Compartilhando tela</h3>
                            ...
                        </section>
                    </>
                )}

                {selectedTabOption === tabOptions[1] && (
                    <>
                        <section className="brandColorSection">
                            <h3 className="contentTitle">Name text color</h3>
                            <input type="color"/>
                        </section>

                        <section className="brandColorSection">
                            <h3 className="contentTitle">Name background color</h3>
                            <input type="color"/>
                        </section>

                        <section className="brandColorSection">
                            <h3 className="contentTitle">Chat name text color</h3>
                            <input type="color"/>
                        </section>

                        <section className="brandColorSection">
                            <h3 className="contentTitle">Chat name background color</h3>
                            <input type="color"/>
                        </section>

                        <section className="brandColorSection">
                            <h3 className="contentTitle">Chat message text color</h3>
                            <input type="color"/>
                        </section>

                        <section className="brandColorSection">
                            <h3 className="contentTitle">Chat message background color</h3>
                            <input type="color"/>
                        </section>

                        <section className="brandColorSection">
                            <h3 className="contentTitle">Background color</h3>
                            <input type="color"/>
                        </section>
                    </>
                )}
            </Content>

        </Container>

    )
}
