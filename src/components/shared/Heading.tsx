interface HeadingProp {
    text: string | number | undefined,
    className?: string
}
const Heading = ({ text, className }: HeadingProp) => {
    return (
        <h1 className={`ntext-base ${className}`}>{text}</h1>
    )
}

export default Heading