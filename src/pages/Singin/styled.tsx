import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.div`
    .left-side{
        background-color: ${themes.colors.pink[500]};

        min-height: 100vh;
        position: fixed;
        top: 0;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.875rem;

        text-align: center;
        max-width: 480px;


        img{
             width: 100%;
             max-width: 350px;
        }   
      


    }

    .right-side{
        background-color: ${themes.colors.bg};
        width: 100%;
        padding: 20px 0 20px 480px;
        min-height: 100vh;
        display: flex;
        align-items: center;

        .forgetPass{
            font-size:0.75rem;
        }
        
        .formcontainer{
            max-width: 490px;
            margin: 0 auto;
        
            .title{
                margin-bottom: 2rem;

                .hasAccount{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    font-size: 0.75rem;
                    color: #ccc;
                    
                    a{
                        text-decoration: underline;
                        
                    }
                }
                
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

                button{
                    background-color: ${themes.colors.pink[500]};
                    height: 2.5rem;
                    border-radius: 0.375rem;
                    transition: filter 0.2s;

                    &:hover{
                        filter: brightness(0.9);
                    }
                }
            }
        }


    }

    @media (max-width: 850px){
        &{
            
            .left-side{
                display: none;
            }

            .right-side{
                padding: 0;
            }
        }
    }

`