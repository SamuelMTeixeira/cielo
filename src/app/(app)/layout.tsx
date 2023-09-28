import { MainTemplate } from '@/components/templates'
import { LayoutProps } from '../layout'
import navigationItems from '@/data/navigationItems'

export default function MainLayout({ children }: LayoutProps) {
  return (
    <MainTemplate navigationItems={navigationItems}>{children}</MainTemplate>
  )
}
