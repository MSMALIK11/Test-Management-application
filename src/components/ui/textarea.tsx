import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "nflex nmin-h-[60px] nw-full nrounded-md nborder nborder-input nbg-transparent npx-3 npy-2 ntext-sm nshadow-sm placeholder:ntext-muted-foreground focus-visible:noutline-none focus-visible:nring-1 focus-visible:nring-ring disabled:ncursor-not-allowed disabled:nopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
