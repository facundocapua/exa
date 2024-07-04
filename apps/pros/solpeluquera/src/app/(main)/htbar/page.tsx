import firstImg from '@public/htbar/1.webp'
import secondImg from '@public/htbar/2.webp'
import thirdImg from '@public/htbar/3.webp'
import { Breadcrumb } from 'ui/server'
import Title from '@/components/title'
import Image from 'next/image'

export default function ServicesPage () {
  const breadcrumbs = [
    {
      name: 'Hair Tatoo Bar',
      url: '/htbar',
      current: true
    }
  ]

  const images = [
    {
      image: firstImg
    },
    {
      image: secondImg
    },
    {
      image: thirdImg
    }
  ]

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <Title>Hair Tatoo Bar</Title>

      <p className='text-primary-700 pt-2 text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eros et turpis imperdiet cursus. Aenean lobortis lacus feugiat, vulputate sapien et, pellentesque est. In venenatis felis risus, et dapibus mauris semper vitae. Fusce velit tellus, iaculis id porta nec, consequat ac lorem. Nam purus lectus, consequat vel enim sit amet, euismod tempus velit. Nullam fermentum sit amet purus et porttitor. Ut vel urna commodo, fringilla ligula aliquet, congue ligula.
      </p>
      <p className='text-primary-700 pt-2 text-lg'>
        Donec feugiat nisi mauris, nec euismod elit elementum sit amet. Curabitur tristique ut tellus at dignissim. Nam consectetur tempor felis, sed interdum lorem malesuada vehicula. Aliquam feugiat dolor in dignissim condimentum. Mauris faucibus lacinia velit, id malesuada magna dignissim a. Donec blandit ultricies est, blandit congue eros efficitur gravida. Sed tincidunt maximus tellus quis finibus. Morbi ac consectetur felis, quis laoreet lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et pulvinar tellus, ac malesuada nisi. Donec ac ultrices neque, sit amet ultrices nunc.
      </p>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto my-12'>
        {images.map((image, index) => (
          <article
          key={index}
          className='relative overflow-hidden animate-[appear_linear_both] [animation-timeline:view()] [animation-range:entry_20%_cover_40%] md:animate-none'
        >
            <Image
              src={image.image}
              alt='Hair Tatoo Bar'
              className='object-cover h-full aspect-[9/16] md:grayscale transition-all ease-in-out duration-500 hover:grayscale-0 hover:scale-110'
            />
          </article>
        ))}
      </section>
    </section>

  )
}
