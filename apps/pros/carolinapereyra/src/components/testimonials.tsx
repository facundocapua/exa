import Image from 'next/image'
import { RatingStars } from 'ui/components/generic/rating-stars'

type Review = {
  author_name: string
  author_url: string
  profile_photo_url: string
  text: string
  rating: number
  time: number
}

const getReviews = async (): Promise<Review[]> => {
  const referenceId = 'ChIJ_Z0J81x9kZURElZdG_XPkII'
  const apiKey = process.env.GOOGLE_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/details/json?reference=${referenceId}&key=${apiKey}&reviews_no_translations=true`

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.result.reviews)
    .then((reviews) => reviews.slice(0, 4))
}

export default async function Testimonials () {
  const reviews = await getReviews()

  return (
    <div className="relative isolate pb-12 pt-12 bg-primary-100">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-5xl leading-8 tracking-tight text-primary-600 font-title">Opiniones</h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {reviews.filter(review => review.text !== '').map(review => (
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20" key={review.time}>
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <div className='my-4'>
                    <RatingStars rating={review.rating} className='flex' />
                  </div>
                  <blockquote className="text-lg leading-8">
                    <p>{`“${review.text}”`}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                      alt=""
                      src={review!.profile_photo_url}
                      className="h-14 w-14 rounded-full bg-gray-50"
                      width={56}
                      height={56}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-secondary-600">{review.author_name}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
