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
margin-top: 1rem;
height: fit-content;
padding: 0 0.5rem;


.contentTitle{
    font-size: 0.75rem;
    color: #fff;
}

section{
    margin-bottom: 1rem;
}

.brandColorSection{
    input[type=color]{
        width: 50px;
        height: 50px;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
    }

}

`
