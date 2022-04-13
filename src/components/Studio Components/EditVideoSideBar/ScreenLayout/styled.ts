import { themes } from './../../../../styles/themes';
import styled from "styled-components"

export const Container = styled.div`
width: 100%;

    
`

export const Content = styled.div`
margin-top: 1rem;
height: 40px;

h3{
    padding-left: 0.5rem;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    color: #fff;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide{
    width: 100%;
    height: 100%;
    
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    cursor: pointer;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.swiper-button-prev,.swiper-button-next{
    bottom: 0;
    top: auto;
    color: #fff;
    height: 100%;
    background-color: #252627;
}

.swiper-button-next{
    right: 0;
}

.swiper-button-prev{
    left: 0;
}


.screenBase{
        cursor: pointer;
        width: 100%;
        height: 100%;
        max-height: 40px;
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