import { Container } from "."
import {forwardRef, ForwardRefRenderFunction, InputHTMLAttributes} from "react"
import { FieldError } from "react-hook-form"
import { themes } from "../../styles/themes"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
    error?: FieldError
    dark?:boolean
}

const Input:ForwardRefRenderFunction<HTMLInputElement,FormInputProps>  = function ({dark,error,label,...props},ref) {
    return (
        <Container>
            {label && <label htmlFor={label} style={{
                color: `${error?.message ? themes.colors.error : dark ? '#121212' : themes.colors.text}`,
                
            }}>{label}</label>}

            <input ref={ref} {...props} style={{
                color: `${error?.message ? themes.colors.error : dark ? '#121212' : themes.colors.text}`,
                
            }}/>
            <small>{error?.message}</small>
            
        </Container>
    )
}

export const FormInput = forwardRef(Input)