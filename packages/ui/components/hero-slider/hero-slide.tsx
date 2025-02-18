import type { Slide } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  slide: Slide
  priority: boolean
}

export const HeroSlide = ({ slide, priority }: Props) => {
  return (
    <Link href={slide.link}>
      <Image
        src={slide.image_mobile}
        width={780}
        height={546}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto'
        }}
        className="inline-block w-full h-auto md:hidden"
        alt={slide.title}
        draggable={false}
        priority={priority}
      />
      <Image
        src={slide.image}
        width={2500}
        height={520}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto'
        }}
        className="hidden w-full h-auto md:inline-block"
        alt={slide.title}
        draggable={false}
        priority={priority}
      />
    </Link>
  )
}

export default HeroSlide
