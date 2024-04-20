
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IoMdTrash } from '@/assets/Icons'
const UploadImage = () => {
    const [fileName, setFilename] = useState<string | null>(null)
    const [image, setIamge] = useState<string>("")

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the 
        console.log('file', acceptedFiles)
        if (acceptedFiles && acceptedFiles.length > 0) {
            setFilename(acceptedFiles[0].name) // Access the name of the first file
            const imageUrl = URL.createObjectURL(acceptedFiles[0])
            setIamge(imageUrl)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const onDeleteImage = () => {
        setFilename(null)
        setIamge("")
    }
    const imagePreview = (
        <div className='nrelative nmt-4 nh-[180px] nflex njustify-center'>
            <img src={image} alt="" className='nh-[100%]' />
            <span onClick={onDeleteImage} className='nbg-gray-200 nh-[26px] nw-[26px] nflex nitems-center njustify-center n ntext-background nrounded-full ncursor-pointer hover:nscale-110 ntransition-transform nduration-300'><IoMdTrash size={22} /></span>
        </div>
    )

    return (
        <div>
            <h1 className='nmb-1'>Image</h1>
            {
                !fileName && <div  {...getRootProps()} className="nborder nborder-brand nborder-dashed nh-[100px] nrounded-3xl nflex nitems-center njustify-center">
                    <div className={`${isDragActive ? 'nbg-brand/40' : ''}`}>
                        <input {...getInputProps()} />

                        <div>
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> : <div>
                                        <p> Drag 'n' drop some files here, or click to select files</p>
                                        <p>
                                            {fileName}
                                        </p>
                                    </div>
                            }
                        </div>

                    </div>
                </div>
            }

            {image && imagePreview}
        </div>
    )
}

export default UploadImage