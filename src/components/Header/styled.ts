import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.header`
    display:flex;
    align-items:center;
    justify-content:center ;
    border-bottom:1px solid ${themes.dark.gray800} ;

    .wrapper{
        width:100%;
        padding:0 2%;
        height:80px;

        display:flex;
        justify-content:space-between ;
        align-items:center;

        .center{
        
            ul{
                display:flex;
                align-items:center;
                list-style:none;
                gap:1.875rem;
            }
        }
    }


`