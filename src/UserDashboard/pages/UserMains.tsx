
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import UploadFile from '../components/UploadFile'
import Status from '../components/Status'
import Reply from '../components/Reply'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import api from '@/services'
import { UploadAnswerSheetProp } from '@/types/answerSheetType'
import toast from 'react-hot-toast'
import { errorHandler } from '@/helpers/errorHandler'

const UserMains = () => {
    const [description, setDescription] = useState("")
    const [data, setData] = useState<UploadAnswerSheetProp>({
        name: '',
        type: "",
        file: null
    })

    const onDesriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.currentTarget.value)
    }
    const onHandleUplaod = (data: UploadAnswerSheetProp) => {
        if (data) {
            setData(data)
        }
    }

    const onSubmit = async () => {
        console.log(data)
        if (data.file) {

            const formData = new FormData()
            formData.append('name', data.name);
            formData.append('type', data.type)
            formData.append('description', description)
            formData.append('file', data.file)
            try {
                const res = await api.answerSheet.uploadAnswerSheet(formData)
                if (res.status === 200) {
                    const message = res.data.data.message
                    toast.success(message)
                }
            } catch (error) {
                const errorMessage = errorHandler(error)
                toast.error(errorMessage)
            }

        }
    }
    return (
        <div className='lg:nw-2/4'>

            <div className='nflexs'>

                <Tabs defaultValue="upload" className='' >
                    <TabsList className="ngrid  ngrid-cols-3" >
                        <TabsTrigger value="upload">Upload</TabsTrigger>
                        <TabsTrigger value="status">Status</TabsTrigger>
                        <TabsTrigger value="reply">Reply</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload">

                        <div className='nspace-y-3'>

                            <div className='nspace-y-2'>
                                <Label>Description</Label>
                                <Textarea onChange={onDesriptionChange} className='nbg-secondary' placeholder='Enter Description' />
                            </div>
                            <div className='nspace-y-2  overflow-scroll '>

                                <Label>Uplaod image/PDF</Label>
                                <UploadFile onHandleUplaod={onHandleUplaod} />

                            </div>

                        </div>
                        <div className='nflex njustify-end nmt-4'>
                            <Button variant={"secondary"} onClick={onSubmit}>Submit</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="status">
                        <Status />
                    </TabsContent>
                    <TabsContent value="reply">
                        <Reply />
                    </TabsContent>


                </Tabs >


            </div>

        </div>
    )
}

export default UserMains