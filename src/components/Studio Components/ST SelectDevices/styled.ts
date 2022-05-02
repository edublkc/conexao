import styled from "styled-components"
import { themes } from "../../../styles/themes"


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: #121212;
    background-color: #fff;

    width: 100%;
    max-width:700px;

    padding: 0.875rem 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 60px rgba(255,255,255,0.4);

    header{
        h1{
            font-size: 1.25rem;

        }
    }

    .devices{
        display: flex;
        

        .leftSide{
            width: 50%;
           
            span{
                font-weight: bold;
                color: #bbb;
                font-size: 0.75rem;
                margin-bottom: 0.75rem;
                display: inline-block;
            }

            .video{
                width: 280px;
                height: 200px;
                background-color: #121212;
                border-radius: 10px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            video{
                object-fit: unset;
            }
        }


        .rightSide{
            width: 50%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;

            .deviceConfig{
                display: flex;
                flex-direction: column;
                
                span{
                    display: flex;
                    align-items: center;
                    font-size: 1.5rem;
                    gap: 0.5rem;
                    font-weight: 500;

                   
                }

                select, input{
                     border: 1px solid #bbb;
                    padding: 0.5rem;
                    background: transparent;
                }
            }
            
        }
    }

    .goStudioButton{
    display: inline-block;
    background-color:${themes.colors.pink[500]};

    border-radius: 0.3125rem;
    padding:0.875rem 0.625rem;
    font-size: 0.875rem;
    font-weight: 700;
    font-size: 0.812rem;
    transition:0.2s ;

    &:hover{
        filter:brightness(0.9);
    }
    
}
    

`