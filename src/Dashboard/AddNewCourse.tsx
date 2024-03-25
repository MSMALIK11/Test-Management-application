import InputControl from '@/components/shared/InputControl'
const AddNewCourse = () => {
    return (
        <div className='np-4'>
            <h1 className='ntext-lg'>CREATE COURSE</h1>
            <div className='nbg-secondary np-4 nspace-y-2'>
                <p>Basic settings</p>
                <InputControl label='Title' hintText='Enter title' onChange={() => { }} />

            </div>

        </div>
    )
}

export default AddNewCourse