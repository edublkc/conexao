import styled from "styled-components"

export const Container = styled.div`
padding: 0.5rem;

    .chat-box{
        display: flex;
        background-color: #1F1F1F;
        padding: 0.5rem;
        border-radius: 5px;
        cursor: pointer;

        & + .chat-box {
            margin-top: 0.5rem;
        }

        .left-side{
            img{
                width: 32px;
                height: 32px;
                border-radius: 50%;

            }
        }

        .right-side{
            margin-left: 0.5rem;
            font-size: 0.75rem;
            overflow: hidden;
            flex: 1;

            p{
                word-wrap: break-word;
                color: #ccc;

            }
        }
    }
`