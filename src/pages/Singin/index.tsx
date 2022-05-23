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
    email: yup.string().email().required('This field is required'),
    password: yup.string().required('This field is required').min(8, ''),
})

export function Singin() {
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        logout()
    }, [])

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<handleSingUpProps>({
        resolver: yupResolver(schema)
    })

    const handleSingIn = async (values: handleSingUpProps) => {
        setIsLoading(true)
        const user = await authenticateUser(values.email, values.password)
        setIsLoading(false)

        if (typeof user === "string") {
            const error = JSON.parse(user)
            MessageErro(error)
        } else {
            navigate('/myaccount/platforms')
        }



    }

    function MessageErro(error: Errors) {
        let message = ''

        switch (error.code) {
            case "auth/wrong-password":
                message = 'Invalid email and/or password'
                break;
            case 'auth/user-not-found':
                message = 'User not found'
                break;
        }

        notify(message)
    }

    function notify(message: string) {
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
                    <Link to='/'>
                        <h1>CONNECTION</h1>
                        <p>Start your first stream in 2 minutes.
                            Livestream Directly from your browser. No complicated downloads</p>
                            <img src={womanDraw}></img>
                    </Link>

                   
                </div>
            </div>

            <div className="right-side">
                <div className="formcontainer">

                    <div className="title">
                        <div className="hasAccount">
                            <span>Don't have an account yet? Then <Link to="/singup">register</Link></span>
                        </div>
                        <h1>Welcome</h1>
                        <h3>Enter your email and password to login:</h3>
                    </div>


                    <form onSubmit={handleSubmit(handleSingIn)}>
                        <FormInput label="E-mail: " placeholder="E-mail" type="text" error={errors.email} disabled={isLoading} {...register('email')} />
                        <FormInput label="Password: " placeholder="Password" type="password" error={errors.password} disabled={isLoading} {...register('password')} />



                        <button type="submit" disabled={isLoading}>
                            {isLoading && <SyncLoader color={'#fff'} loading={isLoading} size={5} />}
                            {!isLoading && 'Log in'}
                        </button>
                    </form>
                    <Link className="forgetPass" to="/">I forgot my password</Link>
                </div>
            </div>
        </Container>
    )
}