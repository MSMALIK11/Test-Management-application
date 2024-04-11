
import { Input } from '../ui/input'
import { Label } from '../ui/label'
interface InputProp {
    label: string,
    hintText: string,
    name: string,
    onChange: () => void
}
const InputNumberControl = ({ label, hintText, name, onChange, ...rest }: InputProp) => {
    return (
        <div className='nspace-y-1'>
            <Label>{label}</Label>
            <Input type='number' name={name} placeholder={hintText} onChange={onChange} {...rest} />
        </div>
    )
}

export default InputNumberControl