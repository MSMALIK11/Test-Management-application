
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const TextMarkDown = ({ text }: { text: string }) => {
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </div>
    )
}

export default TextMarkDown