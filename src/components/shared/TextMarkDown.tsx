
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
const TextMarkDown = ({ text }: { text: string }) => {
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{text}</Markdown>
        </div>
    )
}

export default TextMarkDown