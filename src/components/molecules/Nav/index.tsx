import { Box } from '@/components/atoms'
import { ComponentProps, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import Link from '@/components/atoms/Link'

export interface NavItem {
  name: string
  url: string
  Icon: LucideIcon
}

export interface NavProps extends ComponentProps<'ul'> {
  children: ReactNode[]
}

export function NavItem({ name, Icon, url }: NavItem) {
  return (
    <li>
      <Link
        href={url}
        size="md"
        weight="normal"
        className="flex items-center gap-2 text-gray-800"
      >
        <Icon size={20} />
        {name}
      </Link>
    </li>
  )
}

export function Nav({ children, ...props }: NavProps) {
  return (
    <Box as={'nav'}>
      <Box as={'ul'} {...props}>
        {children}
      </Box>
    </Box>
  )
}

export default Nav
