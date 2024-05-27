import { Button } from "../ui/button"



interface IconButton {
    onClick?: () => void,
    icon?: React.ReactNode,
    disabled?: boolean
}
const IconButton = ({ icon, onClick, disabled }: IconButton) => {
    return (
        <Button disabled={disabled} id="custom-button" variant={"ghost"} onClick={onClick} size={'icon'} className=" nflex nitems-center" >
            {icon && icon}
        </Button>
    )
}

export default IconButton