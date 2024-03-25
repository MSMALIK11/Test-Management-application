
import { Input } from '../ui/input'
import { Label } from '../ui/label'
interface InputProp {
    label: string,
    hintText: string,
    onChange: () => void
}
const InputControl = ({ label, hintText, onChange }: InputProp) => {
    return (
        <div className='nspace-y-1'>
            <Label>{label}</Label>
            <Input placeholder={hintText} onChange={onChange} />
        </div>
    )
}

export default InputControl