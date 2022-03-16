import { Container } from "."
import {forwardRef, ForwardRefRenderFunction, InputHTMLAttributes} from "react"
import { FieldError } from "react-hook-form"
import { themes } from "../../styles/themes"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
    error?: FieldError
}

const Input:ForwardRefRenderFunction<HTMLInputElement,FormInputProps>  = function ({error,label,...props},ref) {
    return (
        <Container>
            {label && <label htmlFor={label} style={{
                color: `${error?.message ? themes.colors.error : themes.colors.text}`,
                
            }}>{label}</label>}

            <input ref={ref} {...props} />
            <small>{error?.message}</small>
            
        </Container>
    )
}

export const FormInput = forwardRef(Input)