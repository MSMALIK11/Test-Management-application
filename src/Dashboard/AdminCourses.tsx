import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import api from '@/services'
import Loading from '@/components/shared/Loading'
import Each from '@/components/shared/Each'
import { BiTrash } from 'react-icons/bi'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
const AdminCourses = () => {
    const [loading, setLaoding] = useState(false)
    const [courseLists, setCourseLists] = useState([])
    const fetchAllCourses = async () => {
        setLaoding(true)
        try {
            const res = await api.quiz.getAllQuizesCourse()
            if (res.status === 201) {
                setCourseLists(res.data.courses)
            }
            setLaoding(false)
        } catch (error) {
            setLaoding(false)
            console.error('Error::while getting all courses', error)

        }
    }

    useEffect(() => {
        fetchAllCourses()

    }, [])
    const handleDeleteCourse = async (id: string) => {
        console.log('run')
        setLaoding(true)
        try {
            const res = await api.quiz.deleteQuizCourse(id)
            if (res.status === 200) {
                setLaoding(false)
                fetchAllCourses()
                toast.success("Course has been deleted successfully")
            }

        } catch (error) {
            setLaoding(false)
            toast.error("Something wen't wrong try again")

        }

    }
    return (
        <div className=''>
            <div className='np-4 ngrid ngrid-cols-3 ngap-4'>
                <Each of={courseLists} render={(course) =>
                    <Card id='my-course-card' className='nborder-secondary nrelative nbg-secondary np-2 '>
                        <BiTrash id='delete-course-icon' onClick={() => handleDeleteCourse(course?._id)} size={20} className=' hover:ntext-red-400 ncursor-pointer nabsolute nz-50 nright-1' />
                        {/* <Button id='delete-course-icon' onClick={() => handleDeleteCourse(course?._id)} variant={"outline"} className='nabsolute ncursor-pointer nright-1'>
                        </Button> */}
                        <CardTitle className='nmt-2 nrelative'>{course?.title}</CardTitle>
                        <CardContent>
                            <CardDescription className='nmt-2'>{course?.description}</CardDescription>
                        </CardContent>
                    </Card>} />

            </div>


            <Loading isLoading={loading} />

        </div>
    )
}

export default AdminCourses