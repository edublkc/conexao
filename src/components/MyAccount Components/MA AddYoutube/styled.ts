import { themes } from '../../../styles/themes';

import styled from "styled-components";


export const Container = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 0.5rem;

    background-color:${themes.colors.platforms.youtube};

    border-radius: 0.3125rem;
    padding:0.5rem 0.625rem;
    font-size: 0.875rem;
    font-weight: 700;
    font-size: 0.812rem;
    transition:0.2s ;
    width: 100px;
    height: 36px;

    &:hover{
        filter:brightness(0.9);
    }
   
`