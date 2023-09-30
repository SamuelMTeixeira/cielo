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
    <Flex as={'div'} direction="column" gap={5} className="p-5 md:flex-row">
      <Aside
        className="hidden md:block md:w-2/12"
        navigationItems={navigationItems}
      />

      {children}
    </Flex>
  )
}
