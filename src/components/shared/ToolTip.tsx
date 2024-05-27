import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProp {
    title: string,
    children: React.ReactNode
}

const ToolTip = ({ title, children }: TooltipProp) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {title}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ToolTip;
