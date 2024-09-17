"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/atoms/button";
import { Calendar } from "@/atoms/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/atoms/popover";

export type DatePickerPropsType = {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: Date;
  onChange?(selectedDate?: Date): void;
};

const DatePicker: React.FC<DatePickerPropsType> = ({
  id,
  className,
  placeholder = "Select date",
  value,
  onChange,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant={"outline"}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          className={"bg-gray-100"}
          mode="single"
          selected={value}
          onSelect={(selectedDate) => onChange?.(selectedDate)}
          initialFocus
          disabled={{
            before: new Date(),
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
