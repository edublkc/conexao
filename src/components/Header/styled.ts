import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.header`
    display:flex;
    align-items:center;
    justify-content:center ;
   

    &.bgScroll{
    //background-color: rgb(52 5 91);
    background-color: rgba(0,0,0,0.8);
    transition: all 0.4s;
    z-index: 10;
    position: sticky;
    top: 0;
    left: 0;
    }
   
    

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

    @media (max-width: 680px){
        .wrapper{
            justify-content: center;

            .right-side{
                display: none;
            }
        }
    }


`

