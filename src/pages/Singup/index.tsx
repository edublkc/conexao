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
import { Link, useNavigate } from "react-router-dom";

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

const requiredFieldWrongText = 'This field is required'

const schema = yup.object({
    name: yup.string().required(requiredFieldWrongText),
    email: yup.string().email().required(requiredFieldWrongText),
    password: yup.string().required(requiredFieldWrongText).min(8),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'passwords do not match')

})

export function Singup() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        logout()
    }, [])

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<handleSingUpProps>({
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
            await authenticateUser(values.email, values.password)
            navigate('/myaccount/platforms')
        }

    }

    function notify(error: Errors) {
        
        let message = ''
        switch (error.code) {
            case 'auth/email-already-in-use':
                message = 'E-mail already registered'
                break;
            case 'auth/error-invalid-email':
                message = 'Enter a valid email address'
                break;
            case 'auth/error-weak-password':
                message = 'Weak password'
                break;
        }

        toast.error(message, {
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
                    <h1>CONNECTION</h1>
                    <p>Start your first stream in 2 minutes.
                        Livestream Directly from your browser. No complicated downloads</p>
                    <img src={womanDraw}></img>
                </div>
            </div>

            <div className="right-side">
                <div className="formcontainer">

                    <div className="title">
                        <div className="hasAccount">
                            <span>You already have an account? Then <Link to="/singin">login</Link></span>
                        </div>
                        <h1>Create your free account!</h1>
                        <h3>Fill in all fields.</h3>
                    </div>


                    <form onSubmit={handleSubmit(handleSingUp)}>

                        <FormInput label="Name: " placeholder="Full name" type="text" error={errors.name} disabled={isLoading} {...register('name')} />

                        <FormInput label="E-mail: " placeholder="E-mail" type="text" error={errors.email} disabled={isLoading} {...register('email')} />

                        <FormInput label="Password: " placeholder="Password" type="password" error={errors.password} disabled={isLoading} {...register('password')} />

                        <FormInput label="Confirm passord: " placeholder="Confirm your password" type="password" disabled={isLoading} error={errors.password_confirmation} {...register('password_confirmation')} />


                        <button type="submit" disabled={isLoading}>
                            {isLoading && <SyncLoader color={'#fff'} loading={isLoading} size={5} />}
                            {!isLoading && 'Register'}
                        </button>
                    </form>

                </div>
            </div>
        </Container>
    )
}