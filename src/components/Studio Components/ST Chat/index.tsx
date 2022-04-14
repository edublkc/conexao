import { Container } from "./styled";
import { useContext, useEffect, useState } from "react";
import {  useCanvasContext } from "../../../context/canvasContext";
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext";


let nextPageToken: string

type ChatMessages = {
    etag: string
    authorDetails: {
        displayName: string,
        profileImageUrl: string,
    },
    snippet: {
        displayMessage: string
    }
}

export let allChatMessages:ChatMessages[] = [{
    etag: 'sdfsdfsdfsd',
    authorDetails: {
        displayName: 'Eduardo Mota',
        profileImageUrl: 'wwww'
    },
    snippet:{
        displayMessage: 'Manda um salve ai'
    }
},{
    etag: 'sdfsdfsdfsdghjghj',
    authorDetails: {
        displayName: 'Charles Chaplin',
        profileImageUrl: 'wwww'
    },
    snippet:{
        displayMessage: 'Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id,fdf'
    }
},{
    etag: 'sdfsdfsdfsdghjghjsdfsfsdfs',
    authorDetails: {
        displayName: 'Cristiano Ronaldo CR7',
        profileImageUrl: 'wwww'
    },
    snippet:{
        displayMessage: 'Asenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi m'
    }
}]

export function Chat() {
    const {youtubeBroadcast} = useContext(BroadcastInformationsContext)

    const {changeSelectedChatMessage,chatSpecificMessageTag} = useCanvasContext()

    const [chatMessages, setChatMessages] = useState<ChatMessages[]>([{
        etag: 'sdfsdfsdfsd',
        authorDetails: {
            displayName: 'Eduardo Mota',
            profileImageUrl: 'wwww'
        },
        snippet:{
            displayMessage: 'Manda um salve ai'
        }
    },{
        etag: 'sdfsdfsdfsdghjghj',
        authorDetails: {
            displayName: 'Charles Chaplin',
            profileImageUrl: 'wwww'
        },
        snippet:{
            displayMessage: 'Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id,fdf'
        }
    },{
        etag: 'sdfsdfsdfsdghjghjsdfsfsdfs',
        authorDetails: {
            displayName: 'Cristiano Ronaldo CR7',
            profileImageUrl: 'wwww'
        },
        snippet:{
            displayMessage: 'Asenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi m'
        }
    }])

    const timerForUpdateChat = 1000 * 5 // 5 seconds

    useEffect(()=>{
        //const updateChatMessages = setInterval(execute,timerForUpdateChat)
        
    },[])

    async function execute() {
        const reqChat = await (window.gapi as any)?.client.youtube.liveChatMessages.list({
            "liveChatId": youtubeBroadcast.liveChatId,
            "part": [
                "snippet,authorDetails",

            ],
            "pageToken": nextPageToken
        })

        const resChat = await reqChat.result.items
        setChatMessages(resChat)
        allChatMessages = chatMessages
    }

    const valor = false

    return (
        <Container>
            {chatMessages && (
                chatMessages.map((chat) => {
                    return (
                        <div 
                        key={chat.etag} 
                        className={`chat-box ${chatSpecificMessageTag === chat.etag ? 'active' : ''}`}
                        onClick={() => changeSelectedChatMessage(chat.authorDetails.displayName,chat.snippet.displayMessage,chat.etag)}>

                            <div className="left-side">
                                <img src={chat.authorDetails.profileImageUrl} />
                            </div>
                            <div className="right-side">
                                <span>{chat.authorDetails.displayName}</span>
                                <p>{chat.snippet.displayMessage}</p>
                            </div>
                        </div>
                    )
                })
            )}

            <button onClick={execute}>Iniciar chat</button>

        </Container>
    )
}


/*
   const [chatMessages, setChatMessages] = useState<ChatMessages[]>([{
        etag: 'sdfsdfsdfsd',
        authorDetails: {
            displayName: 'Eduardo Mota',
            profileImageUrl: 'wwww'
        },
        snippet:{
            displayMessage: 'Manda um salve ai'
        }
    },{
        etag: 'sdfsdfsdfsdghjghj',
        authorDetails: {
            displayName: 'Charles Chaplin',
            profileImageUrl: 'wwww'
        },
        snippet:{
            displayMessage: 'Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id,fdf'
        }
    }])
*/