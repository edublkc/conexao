import styled from "styled-components"

export const Container = styled.div`
width: 100%;

    
`

export const Content = styled.div`
margin-top: 1rem;

h3{
    padding-left: 0.875rem;
    font-size: 0.875rem;
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
    background-color: blue;
    
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


`


export const SlideOption = styled.div`

.content{
    
}


`