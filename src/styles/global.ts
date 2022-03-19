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
        background-color:${themes.colors.bg}; 
    }

    body,a,button{
        color:${themes.colors.text} ;
       
    }

    input{
        border: 0;
        outline: 0;
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

    .myAccountContent{
        padding: 3rem;
    }

    .line{
        display: block;
       height: 1px;
       width: 100%;
       background-color: #686666;
       margin-bottom: 0.625rem;
   }
`