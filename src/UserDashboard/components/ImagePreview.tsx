
interface ImagePreviewProp {
    image: string
}
const ImagePreview = ({ image }: ImagePreviewProp) => {
    return (
        <div>
            <img src={image} alt="" />
        </div>
    )
}

export default ImagePreview