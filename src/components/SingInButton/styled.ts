import { themes } from './../../styles/themes';

import styled from "styled-components";

export const Container = styled.button`
    background-color: ${themes.colors.blueGray[100]};
    color: ${themes.colors.bg};
    border-radius: 0.3125rem;
    padding:0.625rem 1.562rem;
    transition:0.2s ;

    display: flex;
    align-items: center;
    gap: 0.625rem;

    &:hover{
        filter:brightness(0.9);
    }
`