import { themes } from '../../../../styles/themes';
import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100%;
overflow-y: scroll;
padding-bottom:1rem;

&::-webkit-scrollbar {
         width: 8px;               /* width of the entire scrollbar */
    }

        &::-webkit-scrollbar-track {
        background: #18191B;        /* color of the tracking area */
    }   

        &::-webkit-scrollbar-thumb {
        background: ${themes.colors.pink[500]};    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 1px solid ${themes.colors.pink[500]};  /* creates padding around scroll thumb */
    }

`

export const Content = styled.div`

height: fit-content;
padding: 0.5rem 0.5rem;


.contentTitle{
    font-size: 0.75rem;
    color: #fff;
}

section{
    margin-bottom: 1rem;
}

.brandColorSection{

    .colorsInuput{
    display: flex;
    
    gap: 5px;
}
div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }

    input[type="color"]{
        -webkit-appearance: none;
        padding: 0;
        border: none;
        border-radius: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
}
    input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 10px;
        padding: 0;
}
    input[type="color"]::-webkit-color-swatch-wrapper {
        border: none;
         border-radius: 10px;
        padding: 0;
}
}

.saveSection{
    display: flex;
    justify-content: flex-end;

    button{
        background-color: ${themes.colors.pink[200]};
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        transition: 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
}

`
