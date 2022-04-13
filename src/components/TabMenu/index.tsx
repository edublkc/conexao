import { useEffect, useRef } from "react";
import { Container } from "./styled";


interface TabMenuProps {
    options: Array<string>

    selectedTabOptionValue: string
    setSelectedTabOptionState: React.Dispatch<React.SetStateAction<string>>
}

export function TabMenu({ options, setSelectedTabOptionState, selectedTabOptionValue }: TabMenuProps) {

    return (
        <Container>

            {options.map((option, index) => {
                return (
                    <button
                        key={index}
                        className={`option ${selectedTabOptionValue === option ? 'active' : ''}`}
                        onClick={() => { setSelectedTabOptionState(option) }}>
                        {option}
                    </button>
                )
            })}
        </Container>
    )
}