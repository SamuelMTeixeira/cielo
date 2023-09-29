'use client'

import { Box } from '@/components/atoms'
import { NavItem, Nav } from '@/components/molecules/Nav'
import { usePathname } from 'next/navigation'
import { Brand } from '@/components/molecules'

export interface AsideProps {
  navigationItems: NavItem[]
  className?: string
}

export default function Aside({ navigationItems, className }: AsideProps) {
  const pathname = usePathname()

  return (
    <Box as={'aside'} className={className}>
      <Box as={'div'} className="mb-5 mx-4">
        <Brand />
      </Box>

      <Nav className="flex flex-col gap-4">
        {navigationItems.map((item, index) => (
          <NavItem
            name={item.name}
            url={item.url}
            Icon={item.Icon}
            isActive={item.url === pathname}
            key={index}
          />
        ))}
      </Nav>
    </Box>
  )
}
