import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "nz-50 noverflow-hidden nrounded-md nbg-primary npx-3 npy-1.5 ntext-xs ntext-primary-foreground nanimate-in nfade-in-0 nzoom-in-95 data-[state=closed]:nanimate-out data-[state=closed]:nfade-out-0 data-[state=closed]:nzoom-out-95 data-[side=bottom]:nslide-in-from-top-2 data-[side=left]:nslide-in-from-right-2 data-[side=right]:nslide-in-from-left-2 data-[side=top]:nslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
