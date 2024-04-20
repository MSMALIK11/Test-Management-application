import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ onChange }: { onChange: (value: string) => void }) => {
    const [text, setText] = useState("")

    const onChangeText = (val: string) => {
        console.log('val', val)
        setText(val)
        onChange(text)
    }

    return (
        <div id='text-editor'>
            <h1 className='nmb-1'>Description</h1>
            <ReactQuill className=' nbg-background ' theme="snow" value={text} onChange={onChangeText} />
        </div>
    )
}

export default TextEditor