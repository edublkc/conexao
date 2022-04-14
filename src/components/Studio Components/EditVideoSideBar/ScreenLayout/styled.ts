import { themes } from './../../../../styles/themes';
import styled from "styled-components"

export const Container = styled.div`
width: 100%;


`

export const Content = styled.div`
margin-top: 1rem;
height: fit-content;
padding: 0 0.5rem;

.contentTitle{
    
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    color: #fff;
}

`

export const ScreenLayoutContainer = styled.div`

    display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 10px;
   width: 100%;
   
   &:last-child{
    place-self: flex-start;
   }


.screenBase{
    cursor: pointer;
    width: 102px;
    height: 60.75px;
    
    border-radius: 2px;
    background-color: #fff;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;


    &:hover{
        filter: brightness(0.8);
    }
    
    &.active{
        border: 2px solid ${themes.colors.pink[500]};
    }

    
}


.center{
    display: flex;
    align-items: center;
    justify-content: center;
}

.sizes{
    width: 100%;
    height: 100%;
    border-radius: 2px;
}

.screenOnly{
    background-color: ${themes.colors.pink[500]};
}

.bottomRight{
    background-color: ${themes.colors.pink[500]};
    padding: 0 3px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.bottomLeft{
    background-color: ${themes.colors.pink[500]};
    padding: 0 3px;
    display: flex;
    align-items: flex-end;
}

.topRight{
    background-color: ${themes.colors.pink[500]};
    padding: 0 3px;
    display: flex;
    justify-content: flex-end;
}

.topLeft{
    background-color: ${themes.colors.pink[500]};
    padding: 0 3px;
    display: flex;
    align-items: flex-start;
}

.screen{
    background-color: ${themes.colors.pink[500]};
    margin-left: 1px;
}

`


export const SlideOption = styled.div`

.content{
    
}


`