import clsx from 'clsx'
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
  const referenceId = 'ChIJszw148ofkZURVzgD0JxJxgw'
  const apiKey = process.env.GOOGLE_API_KEY
  const url = `https://maps.googleapis.com/maps/api/place/details/json?reference=${referenceId}&key=${apiKey}&reviews_no_translations=true`

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.result.reviews)
}

export default async function Testimonials () {
  const reviews = await getReviews()

  const featuredTestimonial = reviews[0]
  const testimonials = [
    [
      [
        reviews[1]
      ],
      [
        reviews[2]
      ]
    ],
    [
      [
        reviews[3]
      ],
      [
        reviews[4]
      ]
    ]
  ]

  return (
    <div className="relative isolate bg-white pb-12 pt-12">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-slate-600">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen de mi trabajo
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-12 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial!.text}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image
                alt=""
                src={featuredTestimonial!.profile_photo_url}
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                width={40}
                height={40}
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial!.author_name}</div>
                {/* <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div> */}
              </div>
              {/* <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" /> */}
              <RatingStars rating={featuredTestimonial!.rating} />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={clsx(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial!.author_url}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial!.text}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          alt=""
                          src={testimonial!.profile_photo_url}
                          className="h-10 w-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                        />
                        <div className='flex-auto'>
                          <div className="font-semibold">{testimonial!.author_name}</div>
                          {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
                        </div>
                        <RatingStars rating={testimonial!.rating} className='flex md:hidden' />
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
