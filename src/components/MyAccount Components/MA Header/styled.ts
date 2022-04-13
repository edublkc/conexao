import styled from "styled-components";
import { themes } from "../../../styles/themes";

export const Container = styled.header`
    display:flex;
    align-items:center;
    justify-content:center ;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.14),0px 2px 1px rgba(0,0,0,0.12),0px 1px 3px rgba(0,0,0,0.2);
    border-bottom:1px solid rgba(128, 128, 128,0.2);
    .wrapper{
        width:100%;
        max-width: 1440px;
        padding: 0 1.25rem;
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

                a{
                    transition: 0.2s;

                    &.active{
                        color: ${themes.colors.pink.A400};
                    }

                    &:not(.active):hover{
                        color: ${themes.colors.pink.A100};
                    }
                }
            }
        }

        .right-side{
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }


`