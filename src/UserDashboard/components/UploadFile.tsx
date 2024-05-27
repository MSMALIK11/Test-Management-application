
import { useCallback, useState } from 'react'
import { FiUploadCloud, CiImageOn, BsFileEarmarkPdf, IoMdTrash, CiViewList } from '@/assets/Icons'
import { useDropzone } from 'react-dropzone'
import Heading from '@/components/shared/Heading'
import { formatFileSize } from '@/helpers/formateFileSize'
import IconButton from '@/components/shared/IconButton'
import ImagePreview from './ImagePreview'
import PDFViewer from './PDFViewer'
const fileTypeStyle = "nbg-background np-3"
import Modal from '@/components/shared/Modal'
interface UploadFileProp {
    onHandleUplaod: (data) => void
}
const UploadFile = ({ onHandleUplaod }: UploadFileProp) => {
    const [showPreview, setSowPreview] = useState(false)
    const [fileName, setFileName] = useState('')
    const [fileSize, setFileSize] = useState(0)
    const [image, setImage] = useState("")

    const [fileType, setFileType] = useState('')
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const name = file.name
        const size = file.size
        const url = URL.createObjectURL(file)
        const type = file.type.split('/')[0]
        setFileName(name)
        setFileSize(size)
        setFileType(type)
        const payload = {
            type: type,
            name: name,
            file: file
        }
        if (type === "application") {
            setImage(file)
            setFileSize(size)
            onHandleUplaod(payload)
            return
        }
        setImage(url)
        onHandleUplaod(payload)
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'application/pdf': ['.pdf']
        }
    })

    // On Delete Preview
    const onDeletePreview = () => {
        setFileName("")
        setImage("")
        setFileSize(0)
        setFileType("")
    }

    const onTogglePreview=()=>{
        setSowPreview(!showPreview)
        
    }
    const handleClick = () => { }
    const onClose = () => { }
    return (
        <div>

            <div className=' nbg-secondary nrelative  npy-4 nrounded-lg nflex nitems-center njustify-center'>
                {
                    fileName !== "" && <div className='nabsolute nright-1 ntop-1 nflex'>
                        <IconButton onClick={onDeletePreview} icon={<IoMdTrash size={18} />} />
                        <IconButton onClick={() => setSowPreview((prev) => !prev)} icon={<CiViewList size={18} />} />
                    </div>
                }


                <div {...getRootProps()} >
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <div>
                                <p>Drop the files here ...</p>
                            </div> : fileName === "" ?
                                <div className='nflex nflex-col nitems-center njustify-center ngap-4'>
                                    <FiUploadCloud size={48} />
                                    <p className='ntext-gray-400 ntext-xl nfont-bold'>Drag 'n' drop a file</p>
                                    <div className='nflex nitems-center njustify-center ngap-4'>
                                        <div className={fileTypeStyle}>
                                            <CiImageOn size={32} />
                                        </div>
                                        <div className={fileTypeStyle}>
                                            <BsFileEarmarkPdf size={32} />
                                        </div>

                                    </div>

                                </div> : <div className='nflex nflex-col ngap-2 '>
                                    {
                                        fileType === "application" ? <div>
                                            {/* <PDFViewer file={image} /> */}
                                        </div> : ''
                                    }
                                    <ImagePreview image={image} />

                                    <div className='nflex ngap-2 nmt-2'>
                                        <Heading text="Filename" className='ntext-gray-400' />
                                        <Heading text={`${fileName.toString().slice(0, 20)}...`} />
                                    </div>

                                    <div className='nflex nitems-center ngap-2'>
                                        <Heading text="Size:" className='ntext-gray-400' />
                                        <Heading text={formatFileSize(fileSize)} />
                                    </div>
                                </div>


                    }

                </div>

            </div>
            <Modal isVisible={showPreview} onClick={handleClick} onClose={onClose} >
                <div className='nh-[600px] noverflow-scroll'>
                    <PDFViewer file={image} />

                </div>

            </Modal>

            {/* {
                fileType === "application" && <div className='nh-[50vh]  overflow-auto'>
                    <PDFViewer file={image} />
                </div>
            } */}
            <div>

            </div>
        </div>
    )
}

export default UploadFile