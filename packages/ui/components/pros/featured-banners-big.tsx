import { getFeaturedBanners } from 'api'
import Image from 'next/image'
import Link from 'next/link'

export const FeaturedBannersBig = async () => {
  const banners = await getFeaturedBanners()
  if (!banners) return null

  return (
    <div className="hidden md:flex justify-evenly my-6 gap-4 flex-nowrap mx-4">
      {banners.splice(0, 3).map((banner) => (
        <Link href={banner.link} title={banner.title} key={banner.id} className='w-full md:w-auto'>
          <Image
            className='object-cover hover:scale-105 transition-all ease-in-out duration-200'
            src={banner.image} width={600} height={600} alt={banner.title}
          />
        </Link>
      ))}
    </div>
  )
}

export default FeaturedBannersBig
