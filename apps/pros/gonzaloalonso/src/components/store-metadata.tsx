import { STORE_URL } from '@/utils/const'
import type { Salon } from 'api'

type Props = {
  salon: Salon
}

const daysName = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'
}

export default function StoreMetadata ({ salon }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    image: [
      `${STORE_URL}/studio/1.webp`,
      `${STORE_URL}/studio/2.webp`,
      `${STORE_URL}/studio/3.jpg`,
      `${STORE_URL}/studio/4.webp`,
      `${STORE_URL}/studio/5.jpg`,
      `${STORE_URL}/studio/6.webp`
    ],
    name: salon.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: salon.address,
      addressLocality: salon.city,
      addressRegion: salon.state,
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: salon.lat,
      longitude: salon.lng
    },
    url: STORE_URL,
    telephone: salon.phone,
    openingHoursSpecification: Object.entries(salon.hours ?? {}).map(data => {
      const [day, value] = data
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: daysName[day as keyof typeof daysName],
        open: value.open,
        close: value.close
      }
    })
  }

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
