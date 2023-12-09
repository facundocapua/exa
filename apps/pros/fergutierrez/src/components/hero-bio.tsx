import ProfilePic from '@public/about-me/main.png'
import Image from 'next/image'

export default function HeroBio () {
  return (
    <section className="w-full py-8">
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <Image src={ProfilePic} alt='Fernanda Gutierrez' className='mx-auto' />
        <article>
          <h1 className='text-4xl'>Soy Fernanda Gutiérrez</h1>
          <p className='text-lg my-4 text-gray-600'>Nací en Bs As argentina. Soy maquilladora desde hace 20 años, me recibí en Mulet Estudio. Me perfeccioné con Mabby Autino, Sebastián Correa, Vero Fioravanti , Bettina Frumboli y Vero Luna.</p>
          <p className='text-lg my-4 text-gray-600'>Actualmente vivo en Tandil donde tengo mi estudio y brindo servicios de maquillaje social y dicto cursos.</p>
          <p className='text-lg my-4 text-gray-600'>Tengo un estilo natural que se ve reflejado en mis trabajos, adapto las tendencias de la moda buscando resaltar la belleza.</p>
        </article>
      </div>
    </section>
  )
}
