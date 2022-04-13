import styled from "styled-components"
import { themes } from "../../../styles/themes"

export const Container = styled.button`
    display: inline-block;
    background-color:${themes.colors.pink[500]};

    border-radius: 0.3125rem;
    padding:0.25rem 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
    transition:0.2s ;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover{
        filter:brightness(0.8);
    }
    
`