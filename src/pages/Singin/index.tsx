import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { authenticateUser, createUser, logout } from "../../services/firebase/firebaseAuthConfig";

import { Container } from "./styled";
import womanDraw from "../../assets/woman.svg"

import { FormInput } from "../../components/FormInputs/styled";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


import SyncLoader from "react-spinners/SyncLoader";

interface handleSingUpProps {
    email: string
    password: string
}

interface Errors {
    code: string
}

const schema = yup.object({
    email: yup.string().email('digite um email válido').required('este campo é obrigatório'),
    password: yup.string().required('este campo é obrigatório').min(8, ''),
})

export function Singin() {
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    useEffect(()=>{
        logout()
    },[])

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<handleSingUpProps>({
        resolver: yupResolver(schema)
    })

    const handleSingIn = async (values: handleSingUpProps) => {
        setIsLoading(true)
        const user = await authenticateUser(values.email,values.password)
        setIsLoading(false)

        if (typeof user === "string") {
            const error = JSON.parse(user)
            MessageErro(error)
        } else {
            navigate('/')
        }

        

    }

    function MessageErro(error: Errors) {
        setErrorMessage('')

        switch(error.code){
            case "auth/wrong-password":
                setErrorMessage('E-mail e/ou senha inválido')
            break;
            case 'auth/user-not-found':
                setErrorMessage('Usuário não encontrado')
            break;
        }

        notify()
    }

    function notify(){
        toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme={'colored'}
            />


            <div className="left-side">
                <div className="wrapper">
                    <h1>CONEXÃO</h1>
                    <p>Receba via pix mensagens de vídeo, audio e texto facilmente e exiba o conteúdo recebido na sua transmissão facilmente.</p>
                    <img src={womanDraw}></img>
                </div>
            </div>

            <div className="right-side">
                <div className="formcontainer">

                    <div className="title">
                        <div className="hasAccount">
                            <span>Ainda não tem conta? Então <Link to="/singup">faça seu cadastro</Link></span>
                        </div>
                        <h1>Seja bem-vindo</h1>
                        <h3>Digite seu e-mail e senha para entrar:</h3>
                    </div>


                    <form onSubmit={handleSubmit(handleSingIn)}>
                        <FormInput label="E-mail: " placeholder="E-mail" type="text" error={errors.email} disabled={isLoading} {...register('email')} />
                        <FormInput label="Senha: " placeholder="Senha" type="password" error={errors.password} disabled={isLoading} {...register('password')} />



                        <button type="submit" disabled={isLoading}>
                            {isLoading && <SyncLoader color={'#fff'} loading={isLoading} size={5} />}
                            {!isLoading && 'Entrar'}
                        </button>
                    </form>
                    <Link className="forgetPass" to="/">Esqueci minha senha</Link>
                </div>
            </div>
        </Container>
    )
}