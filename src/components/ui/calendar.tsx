import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("np-3", className)}
      classNames={{
        months: "nflex nflex-col sm:nflex-row nspace-y-4 sm:nspace-x-4 sm:nspace-y-0",
        month: "nspace-y-4",
        caption: "nflex njustify-center npt-1 nrelative nitems-center",
        caption_label: "ntext-sm nfont-medium",
        nav: "nspace-x-1 nflex nitems-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "nh-7 nw-7 nbg-transparent np-0 nopacity-50 hover:nopacity-100"
        ),
        nav_button_previous: "nabsolute nleft-1",
        nav_button_next: "nabsolute nright-1",
        table: "nw-full nborder-collapse nspace-y-1",
        head_row: "nflex",
        head_cell:
          "ntext-muted-foreground nrounded-md nw-8 nfont-normal ntext-[0.8rem]",
        row: "nflex nw-full nmt-2",
        cell: cn(
          "nrelative np-0 ntext-center ntext-sm focus-within:nrelative focus-within:nz-20 [&:has([aria-selected])]:nbg-accent [&:has([aria-selected].day-outside)]:nbg-accent/50 [&:has([aria-selected].day-range-end)]:nrounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:nrounded-r-md [&:has(>.day-range-start)]:nrounded-l-md first:[&:has([aria-selected])]:nrounded-l-md last:[&:has([aria-selected])]:nrounded-r-md"
            : "[&:has([aria-selected])]:nrounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "nh-8 nw-8 np-0 nfont-normal aria-selected:nopacity-100"
        ),
        day_range_start: "nday-range-start",
        day_range_end: "nday-range-end",
        day_selected:
          "nbg-primary ntext-primary-foreground hover:nbg-primary hover:ntext-primary-foreground focus:nbg-primary focus:ntext-primary-foreground",
        day_today: "nbg-accent ntext-accent-foreground",
        day_outside:
          "nday-outside ntext-muted-foreground nopacity-50 n aria-selected:nbg-accent/50 aria-selected:ntext-muted-foreground aria-selected:nopacity-30",
        day_disabled: "ntext-muted-foreground nopacity-50",
        day_range_middle:
          "aria-selected:nbg-accent aria-selected:ntext-accent-foreground",
        day_hidden: "ninvisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="nh-4 nw-4" />,
        IconRight: () => <ChevronRightIcon className="nh-4 nw-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
