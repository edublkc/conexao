import { themes } from './../../../styles/themes';
import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
    max-width: 260px;
    min-height: calc(100vh - 80px);
    box-shadow: 0px 8px 10px rgba(0,0,0,0.14),0px 3px 14px rgba(0,0,0,0.12),0px 5px 5px rgba(0,0,0,0.2);

    nav{
        
        ul{
            padding-top: 0.625rem;
            li{
                a{
                    display: flex;
                    align-items: center;

                    gap: 0.625rem;
                    width: 100%;
                    padding: 0.5rem 1rem;

                    transition: 0.2s;

                    &.active{
                        background-color: ${themes.colors.pink[200]};
                        color: #121212;
                    }

                    &:not(.active):hover{
                        background-color:rgba(200, 200, 200,0.1);
                    }
                }
            }
        }

    }
`