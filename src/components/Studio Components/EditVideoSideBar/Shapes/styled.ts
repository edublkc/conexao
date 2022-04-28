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
    margin-bottom: 0.5rem;
    color: #fff;
}

section{
    margin-bottom: 1rem;
}

.Allshapes{
    .fillSquare{
        width: 80px;
        height: 80px;
        background-color: ${themes.colors.blueGray[100]};
        cursor: pointer;
    }
}

.alignIcons{
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        background-color: transparent;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
        font-size: 18px;
        flex: 1;
        transition: 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }

}


.inputsNumbers{
        display: flex;
        align-items: center;

        .inputNumberWrapper{
            display: flex;
            align-items: center;
            gap: 0.312rem;
            width: 100%;
            padding: 0.312rem;
            font-size: 12px;

            input{
                background-color: transparent;
                width: 100%;
                padding: 0.312rem;
                color: #fff;
            }

            input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
            }   

            input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;
            }

            border: 1px solid transparent;

            &:hover{
                border: 1px solid rgb(200, 200, 200);
            }
        }
    }

    
.fillColors{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.312rem;


    .fillColorWrapper{
        display: flex;
        align-items: center;

        font-size: 0.75rem;
        gap: 0.312rem;

        input[type=number]{
                background-color: transparent;
                height: 30px;
                width: 32px;
                padding: 0.312rem;
                color: #fff;
            }

            input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
            }   

            input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;
            }

            border: 1px solid transparent;

            &:hover{
                border: 1px solid rgb(200, 200, 200);
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
}
`
