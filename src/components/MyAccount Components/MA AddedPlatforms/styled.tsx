import styled from "styled-components"
import { themes } from "../../../styles/themes"


export const Container = styled.div`

    .wrapp{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.625rem;
    }
   

    .avatar{
        width: 36px;
        height:36px;
       

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .name{
        display: flex;
        flex-direction: column;
        font-size: 0.75rem;

        .platform{
            color: ${themes.colors.platforms.Youtube};
        }
    }

`