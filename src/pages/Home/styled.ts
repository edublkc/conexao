import { Wrapp } from './../../components/Studio Components/ST MainScreen/styled';
import { themes } from './../../styles/themes';
import styled from "styled-components";
import bgImg from "../../assets/banner-bg.png"

export const Page = styled.main`
  //background-color: #182538;
    //background: rgba(52, 5, 91, 0.7) url(${bgImg});
    //background-blend-mode: multiply;
   // background-position: center;
   // background-size: cover;
   // background-attachment: fixed;

  
    

`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: calc(100vh - 80px);
  

    .wrapper{
        width: 100%;
        max-width: 1120px;
        padding: 0 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 3.75rem;
            line-height: 4rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .paragraph{
            text-align: center;
            max-width: 640px;
            color: ${themes.colors.blueGray[100]};
            margin-bottom: 2rem;
        }

        a{
            background-color:${themes.colors.pink[500]};

            border-radius: 0.3125rem;
            padding:0.625rem 1.562rem;
            transition:0.2s ;

            display: flex;
            align-items: center;
            gap: 0.625rem;

            &:hover{
             filter:brightness(0.9);
            }
        }
    }

    @media (max-width: 680px){
    &{
        .wrapper{
            h1{
                font-size: 2.75rem;
            }

            a{
                display: none;
            }
        }
    }
    
    }
`

export const Space = styled.div`
    height: 80px;
    width: 100%;
`


export const FullViewContainer = styled.section ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

   
    
    p{
        max-width: 800px;
        text-align: center;
        font-weight: 100;
    }

    .subTitle{
        color: ${themes.colors.pink[500]};
        font-size: 1rem;
        margin-bottom: 1rem;
        font-weight: 300;
    }

    .title{
        margin-bottom: 1rem;
    }

    video{
        margin-top: 3rem;
        width: 100%;
        height: auto;
        max-width: 800px;
        max-height: 627px;
        border: 1px solid #2f2f2f;
        border-radius: 10px;
    }

    
    
    //Mobile version
    @media (max-width: 680px){
    &{
        min-height: 50vh;
        margin-bottom: 5rem;
        padding: 1rem;

        p{
            font-size: 0.875rem;
        }
    }
    
    }

  
`
export const FaqContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;

    .wrapp{
        width: 100%;
        max-width: 800px;

        display: flex;
        gap: 2rem;


        .rightSide{
            .title{
                font-size: 1rem;
                position: relative;

                &::after{
                    content: '';
                    bottom: -14px;
                    left: 0;
                    position: absolute;
                    background-color: #304057;
                    width: 6rem;
                    height: 3px;
                }
            }

            .description{
                margin-top: 2rem;
                color: #8595AE;
                text-align: justify;
            }
        }
    }

    @media (max-width: 680px){
    &{
        gap: 1rem;
        
       .wrapp{
           padding: 1rem;
            

           .rightSide{
                .title{
                    font-size: 0.875rem;
                }

               .description{
                   font-size: 0.875rem;
               }
           }
       }
    }
    
    }
`

export const HorizontalLine = styled.div`

width: 100%;
    margin:5rem 0;
    display: flex;
    justify-content: center;
    div{
        height: 1px;
        width: 100%;
        max-width: 1110px;
        background-color: #aaa;
    }
    
`
export const NormalSection = styled.section`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-bottom: 5rem;

    .wrapp{
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 2.375rem;
            text-align: center;
        }

        p{
            margin-top: 1rem;
            text-align: center;
            color: #8595AE;
        }

        a{
            margin-top: 3rem;

            background-color:${themes.colors.pink[500]};

            border-radius: 0.3125rem;
            padding:0.625rem 1.562rem;
            transition:0.2s ;

            display: flex;
            align-items: center;
            gap: 0.625rem;

            width: fit-content;

            &:hover{
             filter:brightness(0.9);
            }
        }
    }

    @media (max-width: 680px){
        &{
           

            .wrapp{
                a{
                    display: none;
                }
            }
        }
    }

`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 0;

    border-top: 1px solid #aaa;
    div{
        span{
            color: #6B7A90;
            font-size: 0.875rem;
        }

        a{
            color: ${themes.colors.pink[200]};
            text-decoration: underline;
        }
    }

    @media (max-width: 680px){
        &{
            div{
                span{
                    font-size: 0.700rem
                }
            }
        }
    }
`