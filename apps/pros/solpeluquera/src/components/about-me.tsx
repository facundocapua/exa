import Image from 'next/image'
import portfolioImage from '../../public/about-me/1.jpg'

export default function AboutMe () {
  return (
    <section className='flex w-full flex-col-reverse md:flex-row-reverse mb-10'>
      <header className='w-full md:w-1/2 px-2 md:px-4 z-10'>
        <h1 className='text-4xl md:text-4xl font-black font-custom uppercase my-4 text-secondary-500 '>Sol <span className='text-primary-400'>Squaglia</span></h1>
        <div className='flex flex-col gap-6 px-2 md:px-0 text-gray-700'>
          <p className='text-balance'>
            Sol La Peluquera nace por los 2000 bajo el nombre de “Sol peluqueria unisex”. Los años pasaron y todo se transformó, hasta nuestra marca.
          </p>
          <p className='text-balance'>
            Con más de 20 años de experiencia en el rubro, Sol (más allá de ser peluquera general) es experta en color y especialista en rulos. Se distingue por su estilo “vanguardista” y LIBRE!
          </p>
          <p className='text-balance'>
            Estudiante incansable de todas las áreas relacionadas a la peluquería y afines. Formada internacionalmente (desde color hasta tricologia capilar). Así mismo, hizo la carrera de Maestra Instructora de 5 años de duración. Para luego convertirse en educadora independiente.
          </p>
          <p className='text-balance'>
            Nunca deja de formarse, para brindar lo mejor en el salón y a sus estudiantes.
          </p>
          <p className='text-balance'>
            Hoy día, Sol La Peluquera está ubicado en Olavarria, Provincia de Buenos Aires. Pero viaja por  distintos lugares, compartiendo sus saberes y brindando todo tipo de formaciones.
          </p>
          <p className='text-balance'>
            SU PASIÓN…. Los colores fantasía
          </p>
        </div>
      </header>
      <footer className='w-full md:w-1/2 h-[483px] md:h-[720px] overflow-hidden'>
        <div
          className='absolute w-full md:w-[640px] h-[483px] md:h-[720px]'
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%)'
          }}
        ></div>
        <Image src={portfolioImage} alt='Gonzalo Alonso' />
      </footer>
    </section>
  )
}
