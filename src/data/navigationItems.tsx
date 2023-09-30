'use client'

import { NavItem } from '@/components/molecules/Nav'
import { ArrowLeftRight, Home } from 'lucide-react'

export const navigationItems: NavItem[] = [
  {
    url: '/',
    name: 'Página inicial',
    Icon: Home,
  },
  {
    url: '/historico',
    name: 'Transações',
    Icon: ArrowLeftRight,
  },
]

export default navigationItems
