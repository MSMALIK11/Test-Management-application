
interface EmptyViewProp {
    title: string,
    subTitle?: string
}
const EmptyView = ({ title = 'No Data Found', subTitle = "Add To View" }: EmptyViewProp) => {
    return (
        <div className='nflex nflex-col nitems-center njustify-center !ntext-gray-400 nmx-auto nmt-20  '>
            <h1 className='ntext-2xl nfont-bold ntext-gray-600'>{title}</h1>
            <p className='nfont-bold ntext-xl ntext-gray-600 '>{subTitle}</p>
        </div>
    )
}

export default EmptyView