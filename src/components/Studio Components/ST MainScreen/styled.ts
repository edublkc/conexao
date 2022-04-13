import { themes } from '../../../styles/themes';
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0D1216;
    
`

export const Wrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
`


export const MainVideo = styled.div`

    header{
        display: flex;
        flex-direction: column;
        

            h1{
                font-size: 1.5rem;
            }

            button{
                align-self: flex-end;
                width: fit-content;
            }

    }
`

export const ScreenLayouts = styled.div`
    box-shadow: 0px 8px 10px rgba(0,0,0,0.14),0px 3px 14px rgba(0,0,0,0.12),0px 5px 5px rgba(0,0,0,0.2);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(72,72,72,0.2);

    .screenBase{
        cursor: pointer;
        width: 54px;
        height: 38px;
        border-radius: 2px;
        background-color: #fff;
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

        &.active{
            border: 2px solid ${themes.colors.pink[500]};
        }
    }

    .center{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sizes{
        width: 42px;
        height: 22px;
        border-radius: 2px;
    }

    .screenOnly{
        background-color: ${themes.colors.pink[500]};
    }

    .bottomRight{
        background-color: ${themes.colors.pink[500]};
        padding: 0 3px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .bottomLeft{
        background-color: ${themes.colors.pink[500]};
        padding: 0 3px;
        display: flex;
        align-items: flex-end;
    }

    .topRight{
        background-color: ${themes.colors.pink[500]};
        padding: 0 3px;
        display: flex;
        justify-content: flex-end;
    }

    .topLeft{
        background-color: ${themes.colors.pink[500]};
        padding: 0 3px;
        display: flex;
        align-items: flex-start;
    }

    .screen{
            background-color: ${themes.colors.pink[500]};
            margin-left: 1px;
    }
`

export const Videos = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background-color: #252627;
    border-top: 1px solid rgba(128, 128, 128,0.2);
    overflow: hidden;

`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
   
    button{
        border: none;
        outline: none;

        background: transparent;

        font-size: 1.25rem;

        transition: filter 0.2;
        color: #fff;

        &:hover{
            filter: brightness(0.8);
        }
    }

`

export const Thumbs = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    .thumbnail{
            width: 156px;
            height: 96px;
            position: relative;
            overflow: hidden;
            background-color: rgb(255, 255, 255);
            border-radius: 4px;
            border: 2px solid ${themes.colors.pink[500]};
            cursor: pointer;
            margin-bottom: 1rem;

            video{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            object-fit: unset;
            border-radius: inherit;
        }

    }
`



