import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import { Container } from "./styled"
import { AiFillYoutube } from "react-icons/ai"

import { PlatformsContext } from "../../../context/platformsContext"

import { ToastContainer, toast } from 'react-toastify';


export function MAAddYoutube() {
    const navigate = useNavigate()
    const { youtube, setYoutube } = useContext(PlatformsContext)

    const authenticate = () => {
        return (window.gapi as any).auth2?.getAuthInstance()?.signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" }).then((res: any) => {
            console.log('AUTENTICAÇÃO----', res)

            setYoutube({
                ...youtube,
                name: res.Iu.sf,
                avatar: res.Iu.zN,
                accessToken: res.wc.access_token
            })
        })
    }

    function loadClient() {
        (window.gapi as any).client?.setApiKey("AIzaSyA5WZMScvIE7yFXCQ4Y41EAteDZ1cfAqQE")
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
    function execute() {
        return (window.gapi as any).client.youtube.liveBroadcasts.insert({
            "resource": {}
        })
            .then(function (response: any) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
                function (err: any) { console.error("Execute error", err); });
    }
    (window.gapi as any).load("client:auth2", function () {
        (window.gapi as any).auth2.init({ client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID });
    });


    function notifySucess() {

    }


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