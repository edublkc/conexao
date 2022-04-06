import styled from "styled-components";
import { themes } from "../../styles/themes";


export const Container = styled.div`
    display: flex;
    
`


export const LeftSide = styled.div`
    height: calc(100vh - 80px);
    
`



export const Center = styled.div`
    flex: 1;
    
    display: flex;
    justify-content: center;
`



export const RightSide = styled.div`
    width: 300px;
    height: calc(100vh - 80px);
    overflow-y: scroll;
    box-shadow: 0px 8px 10px rgba(0,0,0,0.14),0px 3px 14px rgba(0,0,0,0.12),0px 5px 5px rgba(0,0,0,0.2);
`
