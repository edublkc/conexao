import { themes } from '../../../styles/themes';

import styled from "styled-components";


export const Container = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 0.5rem;

    background-color:${themes.colors.platforms.twitch};

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

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        color: #808080;
    }

`

export const ModalContent = styled.div`
    margin-top: 1rem;

    input,select{
     height: 3.125rem;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 0.312rem;
    padding: 0.25rem 0.625rem;
    transition: border 0.2s;
    font-size: 1rem;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 0.875rem;
    }

    button{
        display: inline-block;
        background-color:${themes.colors.pink[500]};
        border-radius: 0.3125rem;
        padding:0.5rem 0.625rem;
        font-size: 0.875rem;
        font-weight: 700;
        font-size: 1rem;
        transition:0.2s ;

        &:hover{
            filter:brightness(0.9);
        }
    }
`