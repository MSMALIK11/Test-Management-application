
import { forwardRef, ForwardedRef } from 'react'
import { Label } from '../ui/label'
import { BiInfoCircle } from 'react-icons/bi';
import { Textarea } from '../ui/textarea';
interface InputProp {
    label?: string,
    hintText?: string,
    name?: string,
    className?: string,
    errorMessage?: string | undefined,
    inputValue?: string | number | undefined,
    readonly?: boolean,
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputControl = forwardRef(({ label, inputValue, onInputChange, hintText, name, errorMessage, className, ...rest }: InputProp,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <div className={`nspace-y-1 ${className}`}>
            <Label className='nflex ngap-1'>{label} </Label>
            <Textarea ref={ref} value={inputValue} onChange={onInputChange} placeholder={hintText} name={name} {...rest} />
            {
                errorMessage && <div className='nflex njustify-end'>
                    <p className='ntext-xs nflex nitems-center ntext-red-500 ngap-1'><BiInfoCircle size={16} />{errorMessage}</p>
                </div>
            }
        </div>
    )
})

export default InputControl
