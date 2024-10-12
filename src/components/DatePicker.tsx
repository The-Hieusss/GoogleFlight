"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarDays} from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"

export function DatePickerDepart() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[190px] justify-start text-left font-normal bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none flex gap-[10px]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarDays/>
          {date ? format(date, "PPP") :  <span>Departure</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
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
              "w-[190px] justify-start text-left font-normal bg-transparent focus:outline-none focus:border-none focus-visible:ring-0 border-none flex gap-[10px]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarDays/>
            {date ? format(date, "PPP") :  <span>Return</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
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
  
  