import { MdOutlinePublish, CiViewList, IoMdTrash, FaRegEdit, LuFileLock2 } from '@/assets/Icons'

export const testSeriesTableMenu = [
    {
        id: 1,
        name: 'Publish',
        icon: <MdOutlinePublish size={22} />,

    },
    {
        id: 101,
        name: 'Private',
        icon: <LuFileLock2 size={22} />,

    },
    {
        id: 2,
        name: 'Edit',
        icon: <FaRegEdit size={22} />

    },
    {
        id: 3,
        name: 'View',
        icon: <CiViewList size={22} />,

    },
    {
        id: 4,
        name: 'Delete',
        icon: <IoMdTrash size={22} />,

    },
]