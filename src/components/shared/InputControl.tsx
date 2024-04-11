import { forwardRef, ForwardedRef } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useFormContext } from "react-hook-form";
import { BiInfoCircle } from 'react-icons/bi';

interface InputProp {
    label?: string,
    hintText?: string,
    onChange?: () => void,
    onBlur?: () => void,
    name?: string,
    className?: string,
    errorMessage?: string | undefined
}

const InputControl = forwardRef(({ label, hintText, onChange, name, errorMessage, className, ...rest }: InputProp,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <div className={`nspace-y-1 ${className}`}>
            <Label>{label}</Label>
            <Input ref={ref} placeholder={hintText} onChange={onChange} name={name} {...rest} />
            {
                errorMessage && <div className='nflex njustify-end'>
                    <p className='ntext-xs nflex nitems-center ntext-red-500 ngap-1'><BiInfoCircle size={16} />{errorMessage}</p>
                </div>
            }
        </div>
    )
})

export default InputControl
