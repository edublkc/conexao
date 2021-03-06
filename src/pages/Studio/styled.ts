import styled from "styled-components";
import { themes } from "../../styles/themes";


export const Container = styled.div`
    display: flex;
  
`


export const LeftSide = styled.div`
    height: calc(100vh - 48px);
    overflow: hidden;
`



export const Center = styled.div`
    flex: 1;
    
    display: flex;
    justify-content: center;
    
`



export const RightSide = styled.div`
    width: 300px;
    height: calc(100vh - 48px);
    overflow-y: scroll;
    box-shadow: 0px 8px 10px rgba(0,0,0,0.14),0px 3px 14px rgba(0,0,0,0.12),0px 5px 5px rgba(0,0,0,0.2);

    &::-webkit-scrollbar {
         width: 8px;               /* width of the entire scrollbar */
    }

        &::-webkit-scrollbar-track {
        background: #18191B;        /* color of the tracking area */
    }   

        &::-webkit-scrollbar-thumb {
        background: #343536;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 1px solid #343536;  /* creates padding around scroll thumb */
    }
`
