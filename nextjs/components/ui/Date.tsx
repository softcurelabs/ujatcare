// "use client"

// import * as React from "react"
// import { CalendarIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Input } from "@/components/ui/input"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// function formatDate(date: Date | undefined) {
//   if (!date) return ""
//   return date.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   })
// }

// export function Calendar28({ value, onChange }: Calendar28Props) {
//   const [open, setOpen] = React.useState(false)
//   const [month, setMonth] = React.useState<Date | undefined>(value)
//   const [textValue, setTextValue] = React.useState(formatDate(value))

//   return (
//     <div className="flex flex-col gap-3">
//       <div className="relative flex gap-2">
//         <Input
//           value={textValue}
//           placeholder="dd/mm/yyyy"
//           className="bg-background pr-10"
//           onChange={(e) => {
//             setTextValue(e.target.value)
//             const d = new Date(e.target.value)
//             if (!isNaN(d.getTime())) {
//               onChange(d)
//               setMonth(d)
//             }
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "ArrowDown") {
//               e.preventDefault()
//               setOpen(true)
//             }
//           }}
//         />
//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <Button
//               variant="ghost"
//               className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
//             >
//               <CalendarIcon className="size-3.5" />
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent
//             className="w-auto overflow-hidden p-0"
//             align="end"
//             alignOffset={-8}
//             sideOffset={10}
//           >
//             <Calendar
//               mode="single"
//               selected={value}
//               captionLayout="dropdown"
//               month={month}
//               onMonthChange={setMonth}
//               onSelect={(d) => {
//                 onChange(d)
//                 setTextValue(formatDate(d))
//                 setOpen(false)
//               }}
//             />
//           </PopoverContent>
//         </Popover>
//       </div>
//     </div>
//   )
// }

// interface Calendar28Props {
//   value: Date | undefined
//   onChange: (date?: Date) => void
// }


"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function formatDateMMDDYYYY(date: Date | undefined) {
  if (!date) return ""
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const dd = String(date.getDate()).padStart(2, "0")
  const yyyy = date.getFullYear()
  return `${mm}/${dd}/${yyyy}`
}

function parseMMDDYYYY(str: string): Date | undefined {
  const [mm, dd, yyyy] = str.split("/")
  if (!mm || !dd || !yyyy) return undefined

  const date = new Date(`${yyyy}-${mm}-${dd}`)
  return isNaN(date.getTime()) ? undefined : date
}

export function Calendar28({ value, onChange }: Calendar28Props) {
  const [open, setOpen] = React.useState(false)
  const [month, setMonth] = React.useState<Date | undefined>(value)
  const [textValue, setTextValue] = React.useState(formatDateMMDDYYYY(value))

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex gap-2">
        <Input
          value={textValue}
          placeholder="MM/DD/YYYY"
          className="bg-background pr-10"
          onChange={(e) => {
            setTextValue(e.target.value)
            const parsed = parseMMDDYYYY(e.target.value)
            if (parsed) {
              onChange(parsed)
              setMonth(parsed)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={value}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(d) => {
                onChange(d)
                setTextValue(formatDateMMDDYYYY(d))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

interface Calendar28Props {
  value: Date | undefined
  onChange: (date?: Date) => void
}
