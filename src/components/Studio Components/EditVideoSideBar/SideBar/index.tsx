import { Container, Options, SelectedOption } from "./styled";

import { RiLayout2Line } from "react-icons/ri"
import { BsPalette } from "react-icons/bs"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { ScreenLayout } from "../ScreenLayout";
import { useState } from "react";

interface optionSelected {
    screenLayout: boolean
    styles: boolean
}

export function EditVideoSideBar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [titleOption, setTitleOption] = useState('')
    const [optionSelected, setOptionSelected] = useState<optionSelected>({
        screenLayout: false,
        styles: false
    })

    function handleOpenSideBarScreenLayout() {
        setAllOptionFalse()
        setIsSideBarOpen(true)
        setTitleOption('Templates')
        setOptionSelected({ ...optionSelected, screenLayout: true })
    }

    function handleOpenSideBarStyles() {
        setAllOptionFalse()
        setIsSideBarOpen(true)
        setTitleOption('Estilos')
        setOptionSelected({ ...optionSelected, styles: true })
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
            <Options style={{ borderRight: `${isSideBarOpen ? '' : '1px solid #808080'}` }}>
                <div
                    className={`icons ${optionSelected.screenLayout ? 'active' : ''}`}
                    onClick={handleOpenSideBarScreenLayout}
                >
                    <RiLayout2Line fontSize='1.5rem' />
                    <span>Templates</span>
                </div>

                <div
                    className={`icons ${optionSelected.styles ? 'active' : ''}`}
                    onClick={handleOpenSideBarStyles}
                >
                    <BsPalette fontSize='1.5rem' />
                    <span>Estilos</span>
                </div>
            </Options>

            {isSideBarOpen && (
                <SelectedOption>
                    <button onClick={closeSideBar} className="closeButton">
                        <MdOutlineArrowBackIosNew />
                        <span>{titleOption}</span>
                    </button>

                    {optionSelected?.screenLayout && (<ScreenLayout />)}
                    {optionSelected?.styles && (<>STYLES</>)}
                </SelectedOption>
            )}

        </Container>
    )
}