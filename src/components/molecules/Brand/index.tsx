import { Flex, Title } from '@/components/atoms'
import React from 'react'
import Image from '@/components/atoms/Image'
import logo from '@/assets/img/logo.svg'
import Link from '@/components/atoms/Link'

export default function Brand() {
  return (
    <Link href={'/'} aria-label="Página inicial" schema="transparent">
      <Flex
        as={'div'}
        direction="row"
        items="baseline"
        className="gap-1 md:flex-col md:justify-start"
      >
        <div className="flex-shrink-0">
          <Image
            src={logo}
            height={200}
            width={110}
            alt="Logo da Cielo"
            className="mb-1 w-full h-auto md:w-28 md:mb-0"
          />
        </div>
        <Title
          level={3}
          className="text-[#04acec] md:text-end md:w-32"
          size="2xl"
        >
          Metrics
        </Title>
      </Flex>
    </Link>
  )
}
