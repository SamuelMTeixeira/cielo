'use client'

import {
  SelectProvider,
  SelectLabel,
  Select as BaseSelect,
  SelectPopover,
  SelectItem,
  VisuallyHidden,
} from '@ariakit/react'

export type SelectProps = {
  label: string
  options: string[]
  defaultValue?: string
}

export default function Select({ label, options, defaultValue }: SelectProps) {
  return (
    <SelectProvider defaultValue={defaultValue ?? options[0]}>
      <SelectLabel className="label">
        <VisuallyHidden>{label}</VisuallyHidden>
      </SelectLabel>
      <BaseSelect className="flex items-center gap-1 border bg-white text-gray-900 text-md rounded-lg focus:ring-blue-300 focus:border-blue-300 py-2.5 px-4" />
      <SelectPopover
        gutter={4}
        sameWidth
        className="popover shadow-md shadow-gray-200 bg-white px-4 rounded-lg"
      >
        <SelectItem className="text-gray-700" value="none" disabled>
          Selecione um período
        </SelectItem>

        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectPopover>
    </SelectProvider>
  )
}
