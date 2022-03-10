import { themes } from '../../styles/themes';

import styled from "styled-components";

export const Container = styled.button`
    background-color:${themes.colors.pink[500]};

    border-radius: 0.3125rem;
    padding:0.625rem 1.562rem;
    transition:0.2s ;

    &:hover{
        filter:brightness(0.9);
    }
`