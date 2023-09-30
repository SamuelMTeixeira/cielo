import { Box, Flex, Title } from '@/components/atoms'
import { ReactNode, useState } from 'react'
import Button from '@/components/atoms/Button'
import { AlignLeft } from 'lucide-react'
import { Brand, Drawer } from '@/components/molecules'
import Nav, { NavItem } from '@/components/molecules/Nav'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  title: string
  rightElement?: ReactNode
  navigationItems: NavItem[]
}

export default function Header({
  title,
  rightElement,
  navigationItems,
}: HeaderProps) {
  return (
    <Box as={'header'}>
      <MobileHeader navigationItems={navigationItems} />

      <Flex justify="between" items="center">
        <Title level={1} size="2xl">
          {title}
        </Title>

        <Box as={'div'} className="hidden md:block">
          {rightElement}
        </Box>
      </Flex>
    </Box>
  )
}

export interface MobileHeaderProps {
  navigationItems: NavItem[]
}

const MobileHeader = ({ navigationItems }: MobileHeaderProps) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={toggleDrawer}>
        <Title level={2} className="px-4 mb-1">
          Menu de navegação
        </Title>
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
      </Drawer>

      <Flex
        as={'div'}
        justify="between"
        items="center"
        className="md:hidden border-b md:border-none mb-5"
      >
        <Button
          onClick={toggleDrawer}
          schema="transparent"
          rounded="full"
          className="py-4 hover:bg-gray-200"
        >
          <AlignLeft className="w-6" />
        </Button>

        <Brand />

        <Box as={'span'} className="w-6" />
      </Flex>
    </>
  )
}
