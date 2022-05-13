import { Container, ModalContent, ModalHeader } from "./styled"
import { BsTwitch } from "react-icons/bs"
import ReactModal from 'react-modal';
import { useContext, useEffect, useState } from "react";
import { BroadcastInformationsContext } from "../../../context/broadcastInformationsContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


export function MAAddTwitch() {
    const { setPlatform, platforms, setTwitchBroadcast} = useContext(BroadcastInformationsContext)

    const [isAddTwitchModalOpen, setiIsAddTwitchModalOpen] = useState(false)

    const [name,setName] = useState('')
    const [server, setServer] = useState("sa-br-rj")
    const [streamKey, setStreamKey] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        let streamsSaved = localStorage.getItem('twitchStreamOptions')

        if (streamsSaved) {
            let streamsSavedObj = JSON.parse(streamsSaved)
            setServer(streamsSavedObj.server)
            setStreamKey(streamsSavedObj.streamKey)
            setName(streamsSavedObj.name)
        }


    }, [])

    function handleOpenAddTwitchModal() {
        setiIsAddTwitchModalOpen(true)
    }

    function handleCloseAddTwitchModal() {
        setiIsAddTwitchModalOpen(false)

    }

    function handleSaveServerValues(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let twitchStreamOptions = {
            server,
            streamKey,
            name: name || 'Twitch'
        }

        let rtmpUrl = `rtmp://${server}.contribute.live-video.net/app/`

        if (streamKey.trim() == '') {
            alert('Put your stream key.')
            return
        }

        localStorage.setItem('twitchStreamOptions', JSON.stringify(twitchStreamOptions));

        setPlatform([...platforms.filter(value => value.name !== 'Twitch'), {
            name: name || 'Twitch',
            avatar: 'https://www.freepnglogos.com/uploads/purple-twitch-logo-png-18.png',
            accessToken: 'res.xc.access_token',
            platformName: 'Twitch',
            ingestionUrl:  rtmpUrl + streamKey,
            selected: false
        }])
    

        setTwitchBroadcast({
            rtmpUrl,
            streamKey,
            ingestionUrl:  rtmpUrl + streamKey
        })

        toast.success('Platform added successfully.', {
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
    }

    function getRtmpUrl(server: string){
        switch(server){
            case 'sa-br-rj':
                return 'rtmp://rio.contribute.live-video.net/app/'
        }
    }



    return (
        <>
            <ReactModal className="react-modal-content" overlayClassName="react-modal-overlay" isOpen={isAddTwitchModalOpen} onRequestClose={handleCloseAddTwitchModal}>
                <ModalHeader>
                    <h3>Twitch</h3>
                </ModalHeader>

                <ModalContent>
                    <div>
                        <label>Name: </label>
                        <input value={name} type='text' onChange={(e) => setName(e.target.value)}/>
                    </div>


                    <div>
                        <label>Server: </label>
                        <select value={server} onChange={(e) => setServer(e.target.value)}>
                            <option value={'rio'}>South America: Brazil, Rio de Janeiro</option>
                            <option value={'sao01'}>South America: Brazil, Sao Paulo (1)</option>
                            <option value={'bue01'}>South America: Buenos Aires, Argentina (1)</option>
                            <option value={'for01'}>South America: Brazil, Fortaleza (1)</option>
                            <option value={'scl01'}>South America : chile, Santiago (1)</option>
                            <option value={'sao03'}>South America: Brazil, Sao Paulo</option>
                            <option value={'mia05'}>US East: Miami, FL (5)</option>
                            <option value={'atl'}>US East: Atlanta, GA</option>
                            <option value={'jfk'}>US East: New York, NY</option>
                            <option value={'iad03'}>US East: Ashburn, VA (3)</option>
                        </select>
                    </div>

                    <div>
                        <label>Stream key: </label>
                        <input value={streamKey} onChange={(e) => setStreamKey(e.target.value)} type="password" />
                    </div>

                    <button type="button" onClick={(e) => handleSaveServerValues(e)}>Save</button>
                </ModalContent>
            </ReactModal>

            <Container onClick={handleOpenAddTwitchModal}>
                <BsTwitch fontSize={20} /> Twitch
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