import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '@/services'
import Each from '@/components/shared/Each'
import Heading from '@/components/shared/Heading'
import { IoCloudDownloadOutline, MdInfoOutline } from '@/assets/Icons'
import { pdfIcon } from '@/assets/assets'
import IconButton from '@/components/shared/IconButton'
import ToolTip from '@/components/shared/ToolTip'
import { getDateTime } from '@/helpers/getDateTime'
const Status = () => {
    const { isLoading, data } = useQuery({ queryKey: ['getAnswerSheetList'], queryFn: api.answerSheet.getAnswerSheetList })
    console.log('dtaa ans=wrr shett', data)
    const answerSheetList = data && data.data

    return (
        <div className='nflex ngap-4 nflex-col '>
            <Each of={answerSheetList} render={(item) => (
                <div className='nbg-secondary npx-4 npy-3'>
                    <div className='nflex nitems-center njustify-between'>
                        <div className='nflex ngap-2 nitems-center'>
                            <img width={36} src={pdfIcon} alt="" />
                            <Heading text={item?.filename} />
                            <Heading className='ntext-gray-400' text={getDateTime(item?.createdAt)} />
                        </div>
                        <div className='nflex ngap-4 nitems-center'>
                            <span className='nbg-rose-400 npx-4 nrounded-lg ntext-sm npy-1'>Pending</span>
                            <IconButton disabled={true} icon={<IoCloudDownloadOutline size={28} />} />
                            <ToolTip title='After the instructor has reviewed and approved your work, you may proceed to download it'>
                                <MdInfoOutline size={24} />
                            </ToolTip>
                        </div>
                    </div>
                </div>)} />
        </div>
    )
}

export default Status