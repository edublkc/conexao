import { Container, ModalHeader, ModalPlatforms, ModalForm, CreateBroadcastButton } from "./styled"
import { FormInput } from "../../FormInputs/styled";

import ReactModal from 'react-modal';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Platform, BroadcastInformationsContext } from "../../../context/broadcastInformationsContext";


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { handleCreateYoutubeBroadcast } from "../../../services/createYoutubeLive";

import SyncLoader from "react-spinners/SyncLoader";

ReactModal.setAppElement('#root')

interface CreateBroadcastInformations {
    title: string,
    description: string,
    privacity: string,
    liveCreated: string
}


interface PlatformsSelected {
    'Youtube': boolean
    'Twitch': boolean
}

const schema = yup.object({
    title: yup.string().required('A title is required for your broadcast'),
    description: yup.string().required('A description is required for your broadcast'),
    privacity: yup.string()
})

export function MACreateNewBroadcast() {
    const navigate = useNavigate()
    const { setBroadcastInformations, setYoutubeBroadcast, platforms, youtubeBroadcast, setPlatform,setBroadcastCreated} = useContext(BroadcastInformationsContext)

    const { register, handleSubmit, formState: { errors } } = useForm<CreateBroadcastInformations>({
        resolver: yupResolver(schema)
    })

    const [isCreateNewBroadcastModalOpen, setIsCreateNewBroadcastModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [platformSelected, setPlatformSelected] = useState<PlatformsSelected>({ 'Youtube': false, 'Twitch': false })

    function handleOpenCreateNewBroadcastModal() {
        setIsCreateNewBroadcastModalOpen(true)
    }

    function handleCloseCreateNewBroadcastModal() {
        setIsCreateNewBroadcastModalOpen(false)
    }

    function handleSelectedPlatform(platform: string) {
        switch (platform) {
            case 'Youtube':
                setPlatformSelected({ ...platformSelected, Youtube: !platformSelected.Youtube })
                setPlatform([...platforms.map((value) => {
                    if (value.platformName === platform) {
                        value.selected = !value.selected
                    }
                    return value
                })])

                break;
            case 'Twitch':
                setPlatformSelected({ ...platformSelected, Twitch: !platformSelected.Twitch })
                setPlatform([...platforms.map((value) => {
                    if (value.platformName === platform) {
                        value.selected = !value.selected
                    }
                    return value
                })])
                break;
        }
    }


    function veirfyIfHasSomePlatformSelected() {
        const platformValue = Object.values(platformSelected)
        if (platformValue.some((plat) => plat === true)) {
            return true
        } else {
            return false
        }
    }


    async function handleCreateNewBroadcast(values: CreateBroadcastInformations) {
        setIsLoading(true)

        const res = await handleCreateYoutubeBroadcast(values)
        setYoutubeBroadcast(res)

        setPlatform([...platforms.map((value) => {
            if (value.platformName === 'Youtube') {
                value.ingestionUrl = res.youtubeIngestionUrl
            }
            return value
        })])

        

        setIsLoading(false)
        setBroadcastCreated(true)
        navigate('/settings')
    }

    function handleCreateTwitchBroadcast(){
        setIsLoading(true)
        navigate('/settings')
    }

    return (
        <>

            <ReactModal className="react-modal-content" overlayClassName="react-modal-overlay" isOpen={isCreateNewBroadcastModalOpen} onRequestClose={handleCloseCreateNewBroadcastModal}>
                <ModalHeader>
                    <h3>Cast to:</h3>
                </ModalHeader>


                <ModalPlatforms>
                    {platforms.length == 0 &&
                        <span className="addPlatform">{`Add some platform to start streaming.`}</span>
                    }

                    {platforms.map((plat) => {
                        return (
                            <div onClick={(e) => { handleSelectedPlatform(plat.platformName) }} className={`platform ${(platformSelected as any)[plat.platformName] === true ? 'active' : ''}`} key={plat.platformName} >
                                <img src={plat.avatar} />
                                <span className={plat.platformName}>{plat.platformName}</span>
                            </div>
                        )
                    })}
                </ModalPlatforms>

                {veirfyIfHasSomePlatformSelected() &&
                    <>
                        {platformSelected.Youtube && (
                            <ModalForm onSubmit={handleSubmit(handleCreateNewBroadcast)}>
                                <FormInput error={errors.title} dark={true} label="Title" placeholder="Enter a title for your broadcast" disabled={isLoading} {...register('title')} />

                                <div className="description">
                                    <label>Description</label>
                                    <textarea placeholder="Enter a description for your broadcast" disabled={isLoading}  {...register('description')}></textarea>

                                </div>

                                <div className="privacity">
                                    <label>Privacity</label>
                                    <select disabled={isLoading} {...register('privacity')}>
                                        <option value='public'>Public</option>
                                        <option value="unlisted">Unlisted</option>
                                        <option value="private">Private</option>
                                    </select>
                                </div>

                                <CreateBroadcastButton type="submit" disabled={isLoading}>
                                    {isLoading && <SyncLoader color={'#fff'} loading={isLoading} size={5} />}
                                    {!isLoading && 'Create broadcast'}
                                </CreateBroadcastButton>
                            </ModalForm>
                        )}

                        {platformSelected.Twitch && !platformSelected.Youtube && (
                            <CreateBroadcastButton onClick={handleCreateTwitchBroadcast}>
                                Create broadcast
                            </CreateBroadcastButton>
                        )}


                    </>

                }

            </ReactModal>



            <Container onClick={handleOpenCreateNewBroadcastModal}>
            Create a new broadcast
            </Container>
        </>

    )
}