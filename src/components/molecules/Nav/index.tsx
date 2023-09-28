import { Box } from '@/components/atoms'
import { ComponentProps, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import Link from '@/components/atoms/Link'

export interface NavItem {
  name: string
  url: string
  Icon: LucideIcon
  isActive?: boolean
}

export interface NavProps extends ComponentProps<'ul'> {
  children: ReactNode[]
}

export function NavItem({ name, Icon, url, isActive }: NavItem) {
  return (
    <li>
      <Link
        href={url}
        size="md"
        weight="normal"
        className={`flex items-center gap-2 ${
          isActive
            ? 'text-blue-500 fill-blue-500 font-bold'
            : 'text-gray-500 fill-gray-600 font-normal'
        }`}
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
