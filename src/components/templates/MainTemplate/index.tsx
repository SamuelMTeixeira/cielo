import { LayoutProps } from '@/app/layout'
import { Flex } from '@/components/atoms'
import { NavItem } from '@/components/molecules/Nav'
import { Aside } from '@/components/organisms'

interface MainTemplate extends LayoutProps {
  navigationItems: NavItem[]
}

export default function MainTemplate({
  children,
  navigationItems,
}: MainTemplate) {
  return (
    <Flex as={'div'} gap={5} className="p-5">
      <Aside navigationItems={navigationItems} />

      <Flex as={'div'} direction="column" className="flex-1">
        {children}
      </Flex>
    </Flex>
  )
}
