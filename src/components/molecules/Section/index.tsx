import { Box } from '@/components/atoms'
import { ComponentProps, ReactNode } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  children: ReactNode
  id: string
}

export default function Section({ children, id, ...props }: SectionProps) {
  return (
    <Box as={'section'} id={id} {...props}>
      {children}
    </Box>
  )
}
