import styled from "styled-components"
import { themes } from "../../../../../styles/themes"

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
    background-color: #7A7575;
    padding: 2px;
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

    img{
        width: 20px;
    }
    
}

.cameraSquare{
    background-color: #7A7575;
    padding: 2px 12px;
    width: fit-content;
    height: fit-content;
    border-radius: 3px;
    img{
        width: 10px;
    }
}

.backgroundColorScreen{
    background-color: #fff;
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
    padding: 3px 3px;

}

.bottomRight{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.bottomLeft{
    display: flex;
    align-items: flex-end;
}

.topRight{
    display: flex;
    justify-content: flex-end;
}

.topLeft{
    display: flex;
    align-items: flex-start;
}

.screen{
    margin-left: 1px;
}

`


export const SlideOption = styled.div`

.content{
    
}


`