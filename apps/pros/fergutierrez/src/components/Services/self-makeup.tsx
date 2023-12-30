import { SELF_MAKEUP_CLASSES } from '@/data/services'
import { getStore } from 'api'
import CourseCard from './course-card'

export default async function SelfMakeup () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getStore(storeId)
  if (!store) return null

  const { whatsapp } = store.social_networks

  return (
    <>
      <section className="my-4 max-w-6xl mx-auto leading-loose">
        <p>¿Querés aprender a maquillarte como una profesional y sentirte segura y radiante en cualquier ocasión?</p>
        <p>¡Entonces estás en el lugar indicado! En mi sección de clases de automaquillaje, te voy a enseñar las mejores técnicas y productos para que puedas descubrir tus habilidades y resaltar tu belleza natural.</p>
        <p className="my-4">Con más de 25 años de experiencia como maquilladora profesional, he aprendido que cada persona es única y tiene necesidades y preferencias individuales. Es por eso que mis clases son personalizadas para vos, para que puedas aprender a maquillarte de acuerdo a tus necesidades específicas.</p>
        <p>No importa si sos principiante o si ya tenés experiencia en el maquillaje, mis clases te ayudarán a mejorar tus habilidades y a descubrir nuevas técnicas para resaltar tus rasgos naturales. Además, te enseñaré cómo cuidar tu piel y cómo elegir los mejores productos para vos.</p>
        <p className="mt-4">¡Te espero!</p>
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
                whatsapp={whatsapp}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
