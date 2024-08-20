import { SELF_MAKEUP_CLASSES } from '@/data/services'
import { getSalon } from 'api'
import CourseCard from './course-card'

export default async function SelfMakeup () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store || !store.social_networks) return null

  const { whatsapp } = store.social_networks

  return (
    <>
      <section className="mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 max-w-lg lg:max-w-none mx-auto lg:grid-cols-3 gap-8">
            {SELF_MAKEUP_CLASSES.map((item) => (
              <CourseCard
                key={item.name}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
                duration={item.duration}
                message={item.message}
                classes={item.classes}
                topics={item.topics}
                whatsapp={whatsapp!}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
