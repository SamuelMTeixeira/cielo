import { Box, Title } from '@/components/atoms'
import Image from '@/components/atoms/Image'
import logo from '@/assets/img/logo.svg'
import { NavItem, Nav } from '@/components/molecules/Nav'

export interface AsideProps {
  navigationItems: NavItem[]
}

export default function Aside({ navigationItems }: AsideProps) {
  return (
    <Box as={'aside'}>
      <Box as={'div'} className="mb-10 mx-4">
        <Image src={logo} height={200} width={110} alt="Logo da Cielo" />
        <Title level={3} className="text-[#04acec] text-end w-32" size="xl">
          Metrics
        </Title>
      </Box>

      <Nav className="flex flex-col gap-4">
        {navigationItems.map((item, index) => (
          <NavItem
            name={item.name}
            url={item.url}
            Icon={item.Icon}
            key={index}
          />
        ))}
      </Nav>
    </Box>
  )
}
