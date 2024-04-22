import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Each from "./Each"
import { Label } from "../ui/label";
import { useState } from "react";
interface Option {
    label: string;
    value: number | string;
}
interface ComboBoxProps {
    options: Option[];
    label: string,
    onSelectChange: (val: number | string) => void,
    hintText?: string
}
const ComboBox = ({ options, label, onSelectChange, hintText = "Please choose..." }: ComboBoxProps) => {
    const [val, setVal] = useState<string | number>(0)
    const onChangeSelection = (val: number | string) => {
        setVal(val)
        if (onSelectChange) {
            onSelectChange(val)
        }

    }
    return (
        <>
            <Label className="">{label}</Label>
            <Select onValueChange={onChangeSelection} value={val.toString()}>
                <SelectTrigger>
                    <SelectValue placeholder={hintText ?? hintText} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Please Choose</SelectLabel>
                        <Each of={options} render={(item) => <SelectItem value={item.value.toString()}>{item.label}</SelectItem>} />

                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}


export default ComboBox
