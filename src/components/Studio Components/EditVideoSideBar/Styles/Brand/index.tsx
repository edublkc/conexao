import { useEffect, useState } from "react";
import { stylesDraw, StylesProps } from "../../../../../draws/StylesDraw/stylesDraw";
import { Container } from "./styled";

export function Brand() {
    const [nameTextColor, setNameTextColor] = useState('#ffffff')
    const [nameBackgroundColor, setNameBackgroundColor] = useState('#000000')

    const [chatNameTextColor, setChatNameTextColor] = useState('#ffffff')
    const [chatNameBackgroundColor, setChatNameBackgroundColor] = useState('#000000')

    const [chatMessageTextColor, setChatMessageTextColor] = useState('#000000')
    const [chatMessageBackgroundColor, setChatMessageBackgroundColor] = useState('#ffffff')

    const [backgroundColor, setBackgroundColor] = useState('#0066ff')

    useEffect(() => {
        let styles = localStorage.getItem('stylesDraw');

        if (styles !== null) {
            let styleObj: StylesProps = JSON.parse(styles)
            changeColorInStates(styleObj)
            stylesDraw(styleObj)
        } else {
            stylesDraw({
                nameTextColor,
                nameBackgroundColor,
                chatNameTextColor,
                chatNameBackgroundColor,
                chatMessageTextColor,
                chatMessageBackgroundColor,
                backgroundColor
            })
        }
    }, [])

    function saveChanges() {
        let styles = {
            nameTextColor,
            nameBackgroundColor,
            chatNameTextColor,
            chatNameBackgroundColor,
            chatMessageTextColor,
            chatMessageBackgroundColor,
            backgroundColor
        }

        localStorage.setItem('stylesDraw', JSON.stringify(styles));


    }

    function changeColorInStates(styleObj: StylesProps) {
        setNameTextColor(styleObj.nameTextColor)
        setNameBackgroundColor(styleObj.nameBackgroundColor)

        setChatNameTextColor(styleObj.chatNameTextColor)
        setChatNameBackgroundColor(styleObj.chatNameBackgroundColor)

        setChatMessageTextColor(styleObj.chatMessageTextColor)
        setChatMessageBackgroundColor(styleObj.chatMessageBackgroundColor)

        setBackgroundColor(styleObj.backgroundColor)
    }

    function changeColorsInStyleDraw() {

        let styles = {
            nameTextColor,
            nameBackgroundColor,
            chatNameTextColor,
            chatNameBackgroundColor,
            chatMessageTextColor,
            chatMessageBackgroundColor,
            backgroundColor
        }

        stylesDraw(styles)
    }

    function handleNameTextColor(e: React.ChangeEvent<HTMLInputElement>) {
        setNameTextColor(e.target.value)
        changeColorsInStyleDraw()
    }

    function handleNameBackgroundColor(e: React.ChangeEvent<HTMLInputElement>) {
        setNameBackgroundColor(e.target.value)
        changeColorsInStyleDraw()
    }

    function handleChatNameTextColor(e: React.ChangeEvent<HTMLInputElement>) {
        setChatNameTextColor(e.target.value)
        changeColorsInStyleDraw()
    }

    function handleChatNameBackgroundColor(e: React.ChangeEvent<HTMLInputElement>) {
        setChatNameBackgroundColor(e.target.value)
        changeColorsInStyleDraw()
    }

    function handleChatMessageTextColor(e: React.ChangeEvent<HTMLInputElement>) {
        setChatMessageTextColor(e.target.value)
        changeColorsInStyleDraw()
    }

    function handleChatMessageBackgroundColor(e: React.ChangeEvent<HTMLInputElement>) {
        setChatMessageBackgroundColor(e.target.value)
        changeColorsInStyleDraw()
    }

    function handleBackgroundColor(e: React.ChangeEvent<HTMLInputElement>) {
        setBackgroundColor(e.target.value)
        changeColorsInStyleDraw()
    }


    return (
        <Container>
            <section className="brandColorSection">
                <h3 className="contentTitle">Name text color</h3>
                <input type="color" onChange={(e) => handleNameTextColor(e)} value={nameTextColor} />
            </section>

            <section className="brandColorSection">
                <h3 className="contentTitle">Name background color</h3>
                <input type="color" onChange={(e) => handleNameBackgroundColor(e)} value={nameBackgroundColor} />
            </section>

            <section className="brandColorSection">
                <h3 className="contentTitle">Chat name text color</h3>
                <input type="color" onChange={(e) => handleChatNameTextColor(e)} value={chatNameTextColor} />
            </section>

            <section className="brandColorSection">
                <h3 className="contentTitle">Chat name background color</h3>
                <input type="color" onChange={(e) => handleChatNameBackgroundColor(e)} value={chatNameBackgroundColor} />
            </section>

            <section className="brandColorSection">
                <h3 className="contentTitle">Chat message text color</h3>
                <input type="color" onChange={(e) => handleChatMessageTextColor(e)} value={chatMessageTextColor} />
            </section>

            <section className="brandColorSection">
                <h3 className="contentTitle">Chat message background color</h3>
                <input type="color" onChange={(e) => handleChatMessageBackgroundColor(e)} value={chatMessageBackgroundColor} />
            </section>

            <section className="brandColorSection">
                <h3 className="contentTitle">Background color</h3>
                <input type="color" onChange={(e) => handleBackgroundColor(e)} value={backgroundColor} />
            </section>

            <section className="saveSection">
                <button type="button" onClick={saveChanges}>Save</button>
            </section>
        </Container>
    )
}