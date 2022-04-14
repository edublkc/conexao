import { useState } from "react";
import { stylesDraw } from "../../../../draws/stylesDraw";
import { TabMenu } from "../../../TabMenu";
import { Container, Content } from "./styled";

const tabOptions = ['Themes', 'Brand']

export function Styles() {
    const [selectedTabOption, setSelectedTabOption] = useState(tabOptions[0])

    const [nameTextColor,setNameTextColor] = useState('')
    const [nameBackgroundColor,setNameBackgroundColor] = useState('')

    const [chatNameTextColor,setChatNameTextColor] = useState('')
    const [chatNameBackgroundColor,setChatNameBackgroundColor] = useState('')

    const [chatMessageTextColor,setChatMessageTextColor] = useState('')
    const [chatMessageBackgroundColor,setChatMessageBackgroundColor] = useState('')

    const [backgroundColor,setBackgroundColor] = useState('')


    function handleNameTextColor(e: React.ChangeEvent<HTMLInputElement>){
        setNameTextColor(e.target.value)
        stylesDraw({
            nameTextColor
        })
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
                            <h3 className="contentTitle">Compartilhando tela</h3>
                            ...
                        </section>
                    </>
                )}

                {selectedTabOption === tabOptions[1] && (
                    <>
                        <section className="brandColorSection">
                            <h3 className="contentTitle">Name text color</h3>
                            <input type="color" onChange={(e) => handleNameTextColor(e)} value={nameTextColor}/>
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
