import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";

export const GlobalStyle = createGlobalStyle`
   
*{
        margin:0 ;
        padding:0;
        box-sizing:border-box;
        
    }

    body{
        font-family:'Poppins',sans-serif;
        background-color:${themes.dark.bg}; 
    }

    body,a,input,button{
        color:${themes.dark.text} ;
       
    }

    a{
        text-decoration:none;
    }

    button{
        cursor:pointer;
        border:none;
        outline:none ;
        font-weight:700;
    }
`