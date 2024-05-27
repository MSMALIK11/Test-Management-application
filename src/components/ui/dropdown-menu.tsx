import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "nflex ncursor-default nw-[140px]  nselect-none nitems-center nrounded-sm npx-2 npy-1.5 ntext-sm noutline-none focus:nbg-accent data-[state=open]:nbg-accent",
      inset && "npl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="nml-auto nh-4 nw-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "nz-50 nmin-w-[8rem] noverflow-hidden nrounded-md nborder nbg-popover np-1 ntext-popover-foreground nshadow-lg data-[state=open]:nanimate-in data-[state=closed]:nanimate-out data-[state=closed]:nfade-out-0 data-[state=open]:nfade-in-0 data-[state=closed]:nzoom-out-95 data-[state=open]:nzoom-in-95 data-[side=bottom]:nslide-in-from-top-2 data-[side=left]:nslide-in-from-right-2 data-[side=right]:nslide-in-from-left-2 data-[side=top]:nslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "nz-50 nmin-w-[8rem] nborder-secondary noverflow-hidden nrounded-md nborder nbg-popover np-1 ntext-popover-foreground nshadow-md",
        "data-[state=open]:nanimate-in data-[state=closed]:nanimate-out data-[state=closed]:nfade-out-0 data-[state=open]:nfade-in-0 data-[state=closed]:nzoom-out-95 data-[state=open]:nzoom-in-95 data-[side=bottom]:nslide-in-from-top-2 data-[side=left]:nslide-in-from-right-2 data-[side=right]:nslide-in-from-left-2 data-[side=top]:nslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "nrelative nflex ncursor-default nselect-none nitems-center nrounded-sm npx-2 npy-1.5 ntext-sm noutline-none ntransition-colors focus:nbg-accent focus:ntext-accent-foreground data-[disabled]:npointer-events-none data-[disabled]:nopacity-50",
      inset && "npl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "nrelative nflex ncursor-default nselect-none nitems-center nrounded-sm npy-1.5 npl-8 npr-2 ntext-sm noutline-none ntransition-colors focus:nbg-accent focus:ntext-accent-foreground data-[disabled]:npointer-events-none data-[disabled]:nopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="nabsolute nleft-2 nflex nh-3.5 nw-3.5 nitems-center njustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="nh-4 nw-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "nrelative nflex ncursor-default nselect-none nitems-center nrounded-sm npy-1.5 npl-8 npr-2 ntext-sm noutline-none ntransition-colors focus:nbg-accent focus:ntext-accent-foreground data-[disabled]:npointer-events-none data-[disabled]:nopacity-50",
      className
    )}
    {...props}
  >
    <span className="nabsolute nleft-2 nflex nh-3.5 nw-3.5 nitems-center njustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="nh-4 nw-4 nfill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "npx-2 npy-1.5 ntext-sm nfont-semibold",
      inset && "npl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("n-mx-1 nmy-1 nh-px nbg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("nml-auto ntext-xs ntracking-widest nopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
