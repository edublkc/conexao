import { themes } from './../../styles/themes';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px);

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

        button{
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
`

export const Space = styled.div`
    height: 80px;
    width: 100%;
`