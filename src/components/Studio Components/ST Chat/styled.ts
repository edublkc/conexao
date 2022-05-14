import styled from "styled-components"
import { themes } from "../../../styles/themes"


export const LoadMessages = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    width: 100%;
    height: 30px;

    background-color: ${themes.colors.pink[50]};
    color: #000;

    margin-top: 0.5rem;
    border-radius: 0.5rem;
    
    transition: 0.2s;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    &:hover{
        filter: brightness(0.9);
    }
`

export const Container = styled.div`
padding: 0.5rem;

    .chat-box{
        display: flex;
        background-color: #1F1F1F;
        padding: 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        transition:  0.2s;
        position: relative;

        & + .chat-box {
            margin-top: 0.5rem;
        }

        .left-side{
            img{
                width: 32px;
                height: 32px;
                border-radius: 50%;

            }
        }

        .right-side{
            margin-left: 0.5rem;
            font-size: 0.75rem;
            overflow: hidden;
            flex: 1;

            p{
                word-wrap: break-word;
                color: #ccc;

            }
        }

        &:not(.active):hover{
            &::before{
                content: 'Show message';
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.7);
            }
        }

       

        &.active{
            background-color: ${themes.colors.pink[200]};
            color: #000;
            font-weight: 600;

            p{
                font-weight: 400;
                color: #121212;
            }

            &:hover{
            &::before{
                content: 'Remove message';
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                color: #fff;
                font-weight: 400;
            }
        }
        }
    }

   
`