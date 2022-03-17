import { themes } from '../../styles/themes';

import styled from "styled-components";

export const Container = styled.div`

    a{
    display: inline-block;
    background-color:${themes.colors.pink[500]};

    border-radius: 0.3125rem;
    padding:0.5rem 0.625rem;
    font-size: 0.875rem;
    font-weight: 700;
    font-size: 0.812rem;
    transition:0.2s ;

    &:hover{
        filter:brightness(0.9);
    }
    }
   
`