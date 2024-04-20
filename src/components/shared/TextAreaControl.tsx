
import { Event } from '@/types'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
interface InputProp {
    label: string,
    hintText: string,
    onInputChange?: (event: React.ChangeEvent<HTMLTextAreaElement> | Event) => void,
    name: string,
    inputValue?: string
}
const TextAreaControl = ({ label, inputValue, hintText, onInputChange, name, ...rest }: InputProp) => {
    return (
        <div className='nspace-y-1'>
            <Label>{label}</Label>
            <Textarea placeholder={hintText} value={inputValue} onChange={onInputChange} name={name} {...rest} />
        </div>
    )
}

export default TextAreaControl