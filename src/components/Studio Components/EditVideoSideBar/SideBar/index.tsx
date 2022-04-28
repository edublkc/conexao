import { Container, Options, SelectedOption } from "./styled";

import { RiLayout2Line } from "react-icons/ri"
import { BsPalette } from "react-icons/bs"

import { MdOutlineArrowBackIosNew } from "react-icons/md"
import {FaShapes} from "react-icons/fa"

import { ScreenLayout } from "../ScreenLayout";
import { useState } from "react";
import { Styles } from "../Styles";
import { Shapes } from "../Shapes";

interface optionSelected {
    screenLayout: boolean
    styles: boolean
    shapes: boolean
}

export function EditVideoSideBar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [titleOption, setTitleOption] = useState('')
    const [optionSelected, setOptionSelected] = useState<optionSelected>({
        screenLayout: false,
        styles: false,
        shapes: false
    })

    function handleOpenSideBarScreenLayout() {
        setAllOptionFalse()
        setIsSideBarOpen(true)
        setTitleOption('Screen Layout')
        setOptionSelected({ ...optionSelected, screenLayout: true })
    }

    function handleOpenSideBarStyles() {
        setAllOptionFalse()
        setIsSideBarOpen(true)
        setTitleOption('Styles')
        setOptionSelected({ ...optionSelected, styles: true })
    }

    function handleOpenSideBarShapes() {
        setAllOptionFalse()
        setIsSideBarOpen(true)
        setTitleOption('Shapes')
        setOptionSelected({ ...optionSelected, shapes: true })
    }

    function setAllOptionFalse() {
        for (const i in optionSelected) {
            (optionSelected as any)[i] = false
            const obj = { ...optionSelected }
            setOptionSelected(obj)
        }
    }

    function closeSideBar() {
        setAllOptionFalse()
        setIsSideBarOpen(false)
    }

    return (
        <Container>
            <Options style={{ borderRight: `${isSideBarOpen ? '' : '1px solid rgba(128, 128, 128,0.2)'}` }}>
                <div
                    className={`icons ${optionSelected.screenLayout ? 'active' : ''}`}
                    onClick={handleOpenSideBarScreenLayout}
                >
                    <RiLayout2Line fontSize='1.5rem' />
                    <span>Screen Layout</span>
                </div>

                <div
                    className={`icons ${optionSelected.styles ? 'active' : ''}`}
                    onClick={handleOpenSideBarStyles}
                >
                    <BsPalette fontSize='1.5rem' />
                    <span>Styles</span>
                </div>

              
            </Options>

            {isSideBarOpen && (
                <SelectedOption>
                    <button onClick={closeSideBar} className="closeButton">
                        <span>{titleOption.toUpperCase()}</span>
                        <MdOutlineArrowBackIosNew />
                    </button>

                    {optionSelected?.screenLayout && (<ScreenLayout />)}
                    {optionSelected?.styles && (<Styles/>)}

                </SelectedOption>
            )}

        </Container>
    )
}