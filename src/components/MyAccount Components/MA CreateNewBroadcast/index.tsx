import { Container, ModalHeader, ModalPlatforms, ModalForm } from "./styled"
import { FormInput } from "../../FormInputs/styled";

import ReactModal from 'react-modal';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Platform, PlatformsContext } from "../../../context/platformsContext";


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { handleCreateYoutubeBroadcast } from "../../../services/createYoutubeLive";

import SyncLoader from "react-spinners/SyncLoader";

ReactModal.setAppElement('#root')

interface CreateBroadcastInformations {
    title: string,
    description: string,
    privacity: string
}


interface PlatformsSelected {
    'Youtube': boolean
    'Twitch': boolean
}

const schema = yup.object({
    title: yup.string().required('É necessário um título para sua transmissão'),
    description: yup.string().required('É necessário uma descrição para sua transmissão'),
    privacity: yup.string()
})

export function MACreateNewBroadcast() {
    const navigate = useNavigate()
    const { setBroadcastInformations, setYoutubeBroadcast } = useContext(PlatformsContext)
    const { platforms } = useContext(PlatformsContext)

    const { register, handleSubmit, formState: { errors } } = useForm<CreateBroadcastInformations>({
        resolver: yupResolver(schema)

    })

    const [somePlatformSelected, setsomePlatformSelected] = useState(false)
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
                break;
            case 'Twitch':
                setPlatformSelected({ ...platformSelected, Twitch: !platformSelected.Twitch })
                break;
        }
    }


    function veirfyIfHasSomePlatformSelected(){
        const platformValue = Object.values(platformSelected)
     
        if(platformValue.some((plat)=> plat === true )){
            return true
        }else{
            return false
        }
    }


    async function handleCreateNewBroadcast(values: CreateBroadcastInformations) {
        setBroadcastInformations(values)
        setIsLoading(true)
        const res = await handleCreateYoutubeBroadcast(values)
        setIsLoading(false)
        setYoutubeBroadcast(res)

        console.log(res)

        navigate('/settings')
    }

    return (
        <>

            <ReactModal className="react-modal-content" overlayClassName="react-modal-overlay" isOpen={isCreateNewBroadcastModalOpen} onRequestClose={handleCloseCreateNewBroadcastModal}>
                <ModalHeader>
                    <h3>Transmitir para:</h3>
                </ModalHeader>


                <ModalPlatforms>
                    {platforms.length == 0 &&
                        <span className="addPlatform">{`Adicione alguma plataforma para começar a transmitir.`}</span>
                    }

                    {platforms.map((plat) => {
                        const platform = plat.platformName

                        return (
                            <div onClick={(e) => { handleSelectedPlatform(plat.platformName) }} className={`platform ${(platformSelected as any)[plat.platformName] === true ? 'active' : ''}`} key={plat.platformName} >
                                <img src={plat.avatar} />
                                <span className={plat.platformName}>{plat.platformName}</span>
                            </div>
                        )

                    })}
                </ModalPlatforms>

                {veirfyIfHasSomePlatformSelected() &&
                    <ModalForm onSubmit={handleSubmit(handleCreateNewBroadcast)}>
                        <FormInput error={errors.title} dark={true} label="Título"  placeholder="Digite um título para sua transmissão" disabled={isLoading} {...register('title')} />

                        <div className="description">
                            <label>Descrição</label>
                            <textarea placeholder="Digite uma descrição para sua transmissão" disabled={isLoading}  {...register('description')}></textarea>
                            
                        </div>

                        <div className="privacity">
                            <label>Privacidade</label>
                            <select disabled={isLoading} {...register('privacity')}>
                                <option value='public'>Público</option>
                                <option value="unlisted">Não listado</option>
                                <option value="private">Privado</option>
                            </select>
                        </div>

                        <button type="submit" disabled={isLoading}>
                            {isLoading && <SyncLoader color={'#fff'} loading={isLoading} size={5} />}
                            {!isLoading && 'Criar transmissão'}
                        </button>

                    </ModalForm>
                }

            </ReactModal>



            <Container onClick={handleOpenCreateNewBroadcastModal}>
                Criar nova transmissão
            </Container>
        </>

    )
}