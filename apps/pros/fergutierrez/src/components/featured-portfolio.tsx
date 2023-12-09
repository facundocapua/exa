import FeaturedTitle from './featured-title'
import Gallery from './gallery'

const images = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.jpg',
  '/portfolio/5.jpg',
  '/portfolio/6.jpg'
]

export default function FeaturedPortfolio () {
  return (
    <section className='py-8 my-8 px-8'>
      <FeaturedTitle>Portfolio</FeaturedTitle>
      <Gallery images={images} />
    </section>
  )
}
