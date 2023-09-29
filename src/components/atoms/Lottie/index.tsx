'use client'

import LottieComponent, { Options } from 'react-lottie'

export type ILottie = Options & {
  height?: number | string
  width: number | string
}

export default function Lottie({ animationData, height, width }: ILottie) {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <LottieComponent
      style={{ pointerEvents: 'none' }}
      options={defaultOptions}
      height={height}
      width={width}
    />
  )
}
