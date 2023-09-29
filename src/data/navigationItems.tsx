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
    name: 'Histórico de transações',
    Icon: ArrowLeftRight,
  },
]

export default navigationItems
