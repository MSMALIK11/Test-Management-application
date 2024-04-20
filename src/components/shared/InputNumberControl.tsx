
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
    value?: string | number
}
const InputNumberControl = ({ label, value, checked, type, hintText, name, readOnly, onInputChange, ...rest }: InputProp) => {
    return (
        <div className='nspace-y-1'>
            <Label>{label}</Label>
            <Input type={type} name={name} value={value} readOnly={readOnly} checked={checked} placeholder={hintText} onChange={onInputChange} {...rest} />

        </div>
    )
}

export default InputNumberControl