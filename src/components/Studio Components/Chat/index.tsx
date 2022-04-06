import { Container } from "./styled";
import { useContext, useState } from "react";
import { PlatformsContext } from "../../../context/platformsContext";


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

export function Chat() {
    const { youtubeBroadcast } = useContext(PlatformsContext)
    const [chatMessages, setChatMessages] = useState<ChatMessages[]>()

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
    }



    return (
        <Container>
            
            {chatMessages && (
                chatMessages.map((chat) => {
                    return (
                        <div key={chat.etag} className="chat-box">
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