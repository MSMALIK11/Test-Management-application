
interface BadgeProp {
    background?: string,
    children: React.ReactNode,
    primary?: boolean,
}

const Badge = ({ background, primary, children }: BadgeProp) => {
    return (
        <div>
            {
                children &&
                <span className={`nbadge nwhitespace-nowrap ntext-sm nrounded-full ninline-block npx-3 npy-0.5  ${primary ? 'nbg-rose-400' : 'nbg-green-400'}`} style={{ background: background }}>{children}</span>
            }

        </div>
    )
}

export default Badge