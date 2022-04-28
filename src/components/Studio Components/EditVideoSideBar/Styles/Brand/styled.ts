import { themes } from './../../../../../styles/themes';
import styled from "styled-components"

export const Container = styled.div`
.brandColorSection{
div{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
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

.saveSection{
display: flex;
justify-content: flex-end;

button{
    background-color: ${themes.colors.pink[200]};
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
}
}
`