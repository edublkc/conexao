import { themes } from './../../styles/themes';

import styled from "styled-components";

export const Container = styled.div`

    a{
    background-color: ${themes.colors.blueGray[100]};
    color: ${themes.colors.bg};
    border-radius: 0.3125rem;
    padding:0.5rem 0.625rem;
    font-size: 0.812rem;
    transition:0.2s;
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 0.625rem;

    &:hover{
        filter:brightness(0.9);
    }
    }
   
`