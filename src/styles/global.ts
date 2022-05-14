import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";

export const GlobalStyle = createGlobalStyle`
   
    *{
        margin:0 ;
        padding:0;
        box-sizing:border-box;
        
    }

    :root{
        --swiper-navigation-size: 22px;
    }

    body,textArea,input{
        font-family:'Poppins',sans-serif;
        background-color:${themes.colors.bg}; 
    }

    body,a,button{
        color:${themes.colors.text} ;
       
    }

    input,textArea,select{
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

   .react-modal-overlay{
       background-color: rgba(0,0,0,0.5);
       position: fixed;

       top: 0;
       bottom: 0;
       right: 0;
       left: 0;

       display: flex;
       align-items: center;
       justify-content: center;
   }

   .react-modal-content{
       width: 100%;
       height: fit-content;
       max-width: 600px;
       background-color: #fff;
       padding: 1rem;
       border-radius: 0.24rem;
       color: #121212;
   }

   .Youtube{
       color: ${themes.colors.platforms.Youtube};
   }

   .Twitch{
    color: ${themes.colors.platforms.twitch};
   }

   
   @media (max-width: 1080px){
    html{
        font-size: 93.75%; //15px
    }
    
}

@media (max-width: 720px){
    html{
        font-size: 87.5%; //14px
    }
}

&::-webkit-scrollbar {
         width: 8px;               /* width of the entire scrollbar */
    }

        &::-webkit-scrollbar-track {
        background: #18191B;        /* color of the tracking area */
    }   

        &::-webkit-scrollbar-thumb {
        background: #343536;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 1px solid #343536;  /* creates padding around scroll thumb */
    }
   

`