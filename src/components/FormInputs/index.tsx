import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
                    
    input{
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 0.312rem;
        height: 3.125rem;
                        
        padding: 0.25rem 0.625rem;
        color: ${themes.colors.text};
        transition: border 0.2s;
        font-size: 1rem;

        &:focus{
            border:2px solid ${themes.colors.pink[500]}
        }
     
    }

    small{
        margin-top: 0.2rem;
        color: ${themes.colors.error};
    }
                
`