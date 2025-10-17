"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { theme } from "../lib/theme"

export function DatePickerDepart() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full sm:w-[190px] justify-start text-left font-normal bg-transparent",
            "focus:outline-none focus:border-none focus-visible:ring-0 border-none",
            "flex flex-col sm:flex-row items-start sm:items-center gap-2",
            "hover:bg-gray-50",
            theme.transition.colors,
            !date && "text-gray-500"
          )}
        >
          <div className="flex items-center gap-2 w-full">
            <CalendarDays className={cn("w-5 h-5", theme.colors.primary.text, "flex-shrink-0")} />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Departure</span>
              <span className={cn(theme.typography.body.regular, "font-semibold text-gray-900")}>
                {date ? format(date, "MMM d, yyyy") : "Select date"}
              </span>
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", theme.shadow.xl, theme.radius.md)}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export function DatePickerReturn() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full sm:w-[190px] justify-start text-left font-normal bg-transparent",
            "focus:outline-none focus:border-none focus-visible:ring-0 border-none",
            "flex flex-col sm:flex-row items-start sm:items-center gap-2",
            "hover:bg-gray-50",
            theme.transition.colors,
            !date && "text-gray-500"
          )}
        >
          <div className="flex items-center gap-2 w-full">
            <CalendarDays className={cn("w-5 h-5", theme.colors.secondary.text, "flex-shrink-0")} />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Return</span>
              <span className={cn(theme.typography.body.regular, "font-semibold text-gray-900")}>
                {date ? format(date, "MMM d, yyyy") : "Select date"}
              </span>
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", theme.shadow.xl, theme.radius.md)}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
  
  