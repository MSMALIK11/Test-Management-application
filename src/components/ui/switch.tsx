import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "npeer ninline-flex nh-5 nw-9 nshrink-0 ncursor-pointer nitems-center nrounded-full nborder-2 nborder-transparent nshadow-sm ntransition-colors focus-visible:noutline-none focus-visible:nring-2 focus-visible:nring-ring focus-visible:nring-offset-2 focus-visible:nring-offset-background disabled:ncursor-not-allowed disabled:nopacity-50 data-[state=checked]:nbg-primary data-[state=unchecked]:nbg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "npointer-events-none nblock nh-4 nw-4 nrounded-full nbg-background nshadow-lg nring-0 ntransition-transform data-[state=checked]:ntranslate-x-4 data-[state=unchecked]:ntranslate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
