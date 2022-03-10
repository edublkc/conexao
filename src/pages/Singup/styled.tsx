import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.div`
    display: flex;

    .left-side{
        width: 100%;
        height: 100vh;
        background-color: ${themes.colors.pink[500]};
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: center;

      
        .wrapper{
            height: 100%;
            width: 100%;
            max-width: 540px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 1.875rem;

            text-align: center;

            img{
                width: 100%;
                max-width: 350px;
            }   

        }
      


    }

    .right-side{
        width: 100%;
        height: 100vh;
        background-color: ${themes.colors.bg};
        flex: 1;

        display: flex;
        align-items: center;
        
        .wrapper{
            margin-left: 5rem;

            .title{
                margin-bottom: 2rem;

                h1{
                    color: #ECEFF1;
                }

                h3{
                    color: ${themes.colors.blueGray[100]};
                }
            }

            form{
                display: flex;
                flex-direction: column;
                gap: 30px;

                .form-item{
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
                }
            }
        }


    }

`