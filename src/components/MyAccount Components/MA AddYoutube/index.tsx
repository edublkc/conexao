import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"

import { Container } from "./styled"
import { AiFillYoutube } from "react-icons/ai"

import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext"

import { ToastContainer, toast } from 'react-toastify';


export function MAAddYoutube() {
    const navigate = useNavigate()
    const { platforms, setPlatform } = useContext(BroadcastInformationsContext)

    const authenticate = () => {
        return (window.gapi as any).auth2?.getAuthInstance()?.signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" }).then((res: any) => {
            console.log('AUTENTICAÇÃO----', res)

            setPlatform([...platforms,{
                name: res.Qu.sf,
                avatar: res.Qu.MN,
                accessToken: res.xc.access_token,
                platformName: 'Youtube',
                ingestionUrl: '',
                selected: false
            }])
        })
    }

    function loadClient() {
        (window.gapi as any).client?.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
        return (window.gapi as any).client?.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then((res: any) => {
                toast.success('Plataforma adicionada com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate('/myaccount/platforms')
                }, 2000)

            })

    }
    
    (window.gapi as any).load("client:auth2", function () {
        (window.gapi as any).auth2.init({ client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID });
    });



    return (
        <>

            <Container onClick={() => authenticate().then(loadClient)}>
                <AiFillYoutube fontSize={20} /> Youtube
            </Container>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
        </>

    )
}