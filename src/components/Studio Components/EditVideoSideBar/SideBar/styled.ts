import styled from "styled-components"

export const Container = styled.div`
    background-color: #18191B;
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #898d90;
    

    .icons{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem 0.5rem;
        font-size: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;


        &.active{
         background-color: #252627;
         color: #fff;
         position: relative;

         &:not(:nth-child(1)):before{
             content: '';
             position: absolute;
             top: 0px;
             left: 0;
             background-color: #18191B;
             height: 10px;
             width: 100%;
             border-bottom-right-radius: 10px;
         }

         &:after{
            content: '';
             position: absolute;
             bottom: 0px;
             left: 0;
             background-color: #18191B;
             height: 10px;
             width: 100%;
             border-top-right-radius: 10px;
         }
        }

        &:not(.active):hover{
        color: #fff;
        }

    }
    
   
`

export const SelectedOption = styled.div`
    background-color: #252627;
    width: 100%;
    width: 250px;
    border-right: 1px solid #808080;
    padding: 0.875rem;
    

    .closeButton{
        background-color: transparent;
        display: flex;
        align-items: center;
        width: 100%;
        gap: 0.5rem;
        transition: 0.2s;
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.875rem;

        &:hover{
            filter: brightness(0.9);
        }

        span{
            flex: 1;
        }
    }
`