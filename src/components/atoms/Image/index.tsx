import BaseImage, { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = NextImageProps & {
  alt: string
}

export default function Image({ src, alt, width, height, className }: ImageProps) {
  return <BaseImage src={src} width={width} height={height} alt={alt} className={className} />
}
