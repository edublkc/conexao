import { themes } from '../../../styles/themes';

import styled from "styled-components";


export const Container = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 0.5rem;

    background-color:${themes.colors.pink[500]};

    border-radius: 0.3125rem;
    padding:0.5rem 0.625rem;
    font-size: 0.875rem;
    font-weight: 900;
    font-size: 0.812rem;
    transition:0.2s ;
    height: 2.25rem;


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

export const ModalPlatforms = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;

.platform{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        opacity: 0.5;
        filter: grayscale(30%);

        cursor: pointer;

        img{
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
        }

        &:hover{
            opacity: 0.7;
            filter: grayscale(0%);
        }

        &.active{
            opacity: 1;
            filter: grayscale(0);
        }
    }

    .addPlatform{
        font-size: 0.8rem;
    }

`

export const ModalForm = styled.form`
    margin-top: 2rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .description, .privacity{
        display: flex;
        flex-direction: column;
    }

    textarea, select{
     height: 3.125rem;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 0.312rem;
    padding: 0.25rem 0.625rem;
    transition: border 0.2s;
    font-size: 1rem;

    &:focus{
            border:2px solid ${themes.colors.pink[500]}
        }
     
        small{
        margin-top: 0.2rem;
        color: ${themes.colors.error};
        }
    }

    .description{
       
        textarea{
        height: 5rem;
        resize: vertical;

        }
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
        height: 3rem;

        &:hover{
            filter:brightness(0.9);
        }
    }
`