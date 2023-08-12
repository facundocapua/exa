import { getFeaturedBanners } from 'api'
import Image from 'next/image'
import Link from 'next/link'

export default async function FeaturedBanners () {
  const banners = await getFeaturedBanners()

  if (!banners) return null

  return (
    <div className="flex flex-col justify-evenly my-4 md:flex-row md:space-x-2">
      {banners.map((banner) => (
        <Link href={banner.link} title={banner.title} key={banner.id}>
          <Image
            className='object-cover hover:scale-105 transition-all ease-in-out duration-200'
            src={banner.image} width={300} height={300} alt={banner.title}
          />
        </Link>
      ))}
    </div>
  )
}
