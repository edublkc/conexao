import styled from "styled-components"
import { themes } from "../../styles/themes"

export const Container = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.875rem;

    .option{
        background-color: transparent;
        
        height: 3rem;
        line-height: 3rem;
        font-size: 0.75rem;
        font-weight: 700;
        font-family: 'Poppins',sans-serif;
        position: relative;
        color: #898d90;
        transition: all 0.2s ease;

        &.active::before{
            content: '';
            background-color: ${themes.colors.pink[500]};
            left: 0;
            bottom: 1px;
            height: 3px;
            width: 100%;
            position: absolute;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            animation-name: fadeIn;
            animation-duration: 0.2s;
        }

        &.active{
            color: #fff;
        }

        &:not(.active):hover{
            color: #fff;
        }
    }   

    @keyframes fadeIn {
  0% { opacity: 0; }
  20% { opacity: 0; }
  40% { opacity: 0.3; }
  60% { opacity: 0.5; }
  80% { opacity: 0.9; }
  100% { opacity: 1; }
}
`



