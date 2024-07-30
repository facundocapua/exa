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
      <section className="my-4 max-w-6xl mx-auto leading-loose">
        <p>¿Querés aprender a maquillarte como una profesional, sentirte segura y radiante en cualquier ocasión?</p>
        <p>¡Entonces estás en el lugar indicado! En mi sección de clases de automaquillaje, te voy a enseñar las mejores técnicas y productos para que puedas descubrir tus habilidades, resaltando tu belleza natural.</p>
        <p className="my-4">He aprendido que cada persona es única, por eso mis clases son personalizadas para que puedas aprender a maquillarte según tu estilo</p>
        <p>No importa si sos principiante o si ya tenés experiencia en el maquillaje, mis clases te ayudarán a mejorar tus habilidades y a descubrir nuevas técnicas para resaltar tus rasgos naturales. Además, te enseñaré cómo cuidar tu piel y cómo elegir los mejores productos para vos.</p>
        <p>Los productos para trabajar en clase están incluidos , pero podes traer los tuyos  y vemos si están bien o podemos potenciar aún más tu kit.</p>
        <p>Además vamos a prender los pasos fundamentales para cuidar tu piel.</p>
        <p>Y no van a faltar mis consejos sobre productos que van a hacer que tu maquillaje sea fácil realizar.</p>
        <p className="mt-4">ESTAS SON TODAS LAS CLASES QUE ESTÁN DISPONIBLES PARA VOS</p>
      </section>

      <section className="my-16">
        <div className="max-w-6xl mx-auto">
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
                whatsapp={whatsapp!}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
