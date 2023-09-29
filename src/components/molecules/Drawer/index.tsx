'use client'

import { Box, Flex } from '@/components/atoms'
import Button from '@/components/atoms/Button'
import { X } from 'lucide-react'
import React, { ReactNode } from 'react'
import Brand from '../Brand'

interface IDrawer {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Drawer({ children, isOpen, onClose }: IDrawer) {
  return (
    <Box
      as={'div'}
      className={`fixed h-[100vh] w-full top-0 left-0 z-50 overflow-y-auto overflow-x-hidden bg-white ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <Flex className="p-6" justify="between" items="center">
        <Button
          onClick={onClose}
          schema="transparent"
          rounded="full"
          className="py-4 hover:bg-gray-200"
        >
          <X className="w-6" />
        </Button>

        <Flex items={'center'} justify="center" as={'span'} onClick={onClose}>
          <Brand />
        </Flex>

        <Box as={'span'} className="w-6" />
      </Flex>

      <Flex as={'section'} direction="column" className="px-6">
        {children}
      </Flex>
    </Box>
  )
}
