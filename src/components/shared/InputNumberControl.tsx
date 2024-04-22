
import { BiInfoCircle } from 'react-icons/bi'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
interface InputProp {
    label?: string,
    hintText?: string,
    name?: string,
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    checked?: boolean,
    readOnly?: boolean,
    value?: string | number,
    errorMessage?: string
}
const InputNumberControl = ({ label, value, checked, errorMessage, type, hintText, name, readOnly, onInputChange, ...rest }: InputProp) => {
    return (
        <div className='nspace-y-1'>
            <Label>{label}</Label>
            <div>
                <Input type={type} name={name} value={value} readOnly={readOnly} checked={checked} placeholder={hintText} onChange={onInputChange} {...rest} />
                {
                    errorMessage && <div className='nflex njustify-end'>
                        <p className='ntext-xs nflex nitems-center ntext-red-500 ngap-1'><BiInfoCircle size={16} />{errorMessage}</p>
                    </div>
                }
            </div>


        </div>
    )
}

export default InputNumberControl