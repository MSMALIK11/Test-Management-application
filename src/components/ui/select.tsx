import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "nflex nh-10 nw-full nitems-center njustify-between nrounded-md nborder nborder-input nbg-background npx-3 npy-2 ntext-sm nring-offset-background placeholder:ntext-muted-foreground focus:noutline-none focus:nring-2 focus:nring-ring focus:nring-offset-2 disabled:ncursor-not-allowed disabled:nopacity-50 [&>span]:nline-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="nh-4 nw-4 nopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "nflex ncursor-default nitems-center njustify-center npy-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="nh-4 nw-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "nflex ncursor-default nitems-center njustify-center npy-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="nh-4 nw-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "nrelative nz-50 nmax-h-96 nmin-w-[8rem] noverflow-hidden nrounded-md nborder nbg-popover ntext-popover-foreground nshadow-md data-[state=open]:nanimate-in data-[state=closed]:nanimate-out data-[state=closed]:nfade-out-0 data-[state=open]:nfade-in-0 data-[state=closed]:nzoom-out-95 data-[state=open]:nzoom-in-95 data-[side=bottom]:nslide-in-from-top-2 data-[side=left]:nslide-in-from-right-2 data-[side=right]:nslide-in-from-left-2 data-[side=top]:nslide-in-from-bottom-2",
        position === "popper" &&
        "data-[side=bottom]:ntranslate-y-1 data-[side=left]:n-translate-x-1 data-[side=right]:ntranslate-x-1 data-[side=top]:n-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "np-1",
          position === "popper" &&
          "nh-[var(--radix-select-trigger-height)] nw-full nmin-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("npy-1.5 npl-8 npr-2 ntext-sm nfont-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "nrelative nflex nw-full ncursor-default nselect-none nitems-center nrounded-sm npy-1.5 npl-8 npr-2 ntext-sm noutline-none focus:nbg-accent focus:ntext-accent-foreground data-[disabled]:npointer-events-none data-[disabled]:nopacity-50",
      className
    )}
    {...props}
  >
    <span className="nabsolute nleft-2 nflex nh-3.5 nw-3.5 nitems-center njustify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="nh-4 nw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("n-mx-1 nmy-1 nh-px nbg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
