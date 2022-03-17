import womanDraw from "../../assets/woman.svg"

import { FormInput } from "../../components/FormInputs/styled";
import { Container } from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { authenticateUser, createUser, logout } from "../../services/firebase/firebaseAuthConfig";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

interface handleSingUpProps {
    name: string
    email: string
    password: string
    password_confirmation: string
}

interface Errors {
    code: string
}

const schema = yup.object({
    name: yup.string().required('este campo é obrigatório'),
    email: yup.string().email('digite um email válido').required('este campo é obrigatório'),
    password: yup.string().required('este campo é obrigatório').min(8, 'a senha deve ter no mínimo 8 dígitos'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'a confirmação de senha não está correta')

})

export function Singup() {
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        logout()
    },[])

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm<handleSingUpProps>({
        resolver: yupResolver(schema)
    })

    const handleSingUp = async (values: handleSingUpProps) => {
        setIsLoading(true)

        const newUser = await createUser(values.email, values.password)

        setIsLoading(false)


        if (typeof newUser === "string") {
            const error = JSON.parse(newUser)
            notify(error)
        } else {
            await authenticateUser(values.email,values.password)
            navigate('/myaccount/platforms')
        }

    }

    function notify(error: Errors) {
        switch(error.code){
            case 'auth/email-already-in-use':
                setErrorMessage('O e-mail fornecido já está em uso por outro usuário.')
            break;
            case 'auth/error-invalid-email':
                setErrorMessage('Digite um e-mail válido')
            break;
            case 'auth/error-weak-password':
                setErrorMessage('Senha fraca')
            break;
        }

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
                            <span>Você já tem uma conta? Então <Link to="/singin">faça o login</Link></span>
                        </div>
                        <h1>Crie sua conta grátis!</h1>
                        <h3>Preencha todos os campos.</h3>
                    </div>


                    <form onSubmit={handleSubmit(handleSingUp)}>

                        <FormInput label="Nome: " placeholder="Nome completo" type="text" error={errors.name} disabled={isLoading} {...register('name')} />

                        <FormInput label="E-mail: " placeholder="E-mail" type="text" error={errors.email} disabled={isLoading} {...register('email')} />

                        <FormInput label="Senha: " placeholder="Senha" type="password" error={errors.password} disabled={isLoading} {...register('password')} />

                        <FormInput label="Confirmar senha: " placeholder="Confirme sua senha" type="password" disabled={isLoading} error={errors.password_confirmation} {...register('password_confirmation')} />


                        <button type="submit" disabled={isLoading}>
                            {isLoading && <SyncLoader color={'#fff'} loading={isLoading} size={5} />}
                            {!isLoading && 'Cadastrar'}
                        </button>
                    </form>

                </div>
            </div>
        </Container>
    )
}