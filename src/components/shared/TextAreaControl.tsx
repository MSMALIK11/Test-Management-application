
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
interface InputProp {
    label: string,
    hintText: string,
    onChange: () => void,
    name: string
}
const TextAreaControl = ({ label, hintText, onChange, name, ...rest }: InputProp) => {
    return (
        <div className='nspace-y-1'>
            <Label>{label}</Label>
            <Textarea placeholder={hintText} onChange={onChange} name={name} {...rest} />
        </div>
    )
}

export default TextAreaControl