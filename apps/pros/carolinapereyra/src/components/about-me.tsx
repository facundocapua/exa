import Image from 'next/image'
import portfolioImage from '../../public/about-me/1.webp'

export default function AboutMe () {
  return (
    <section className='flex w-full flex-col-reverse md:flex-row mb-10'>
      <header className='w-full md:w-1/3 px-2 md:px-4 z-10 self-center'>
        <h1 className='text-4xl md:text-6xl font-title my-4 text-secondary-500 '>Carolina <span className='text-primary-400'>Pereyra</span></h1>
        <div className='flex flex-col gap-10 leading-8 px-2 md:px-0 text-gray-700'>
          <p className='text-balance'>
            Me destaco por mi habilidad para personalizar cada estilo, adaptándolo a la personalidad y preferencias de mis clientes.
          </p>
          <p className='text-balance'>
            Mi conocimiento en técnicas de corte y coloración me permite ofrecer transformaciones que resaltan la belleza natural de cada persona.
          </p>
          <p className='text-balance'>
            Con una constante actualización en las últimas tendencias, aseguro resultados modernos y frescos que encantan a quienes visitan mi salón.
          </p>
          <p className='text-balance'>
            Mi enfoque cercano y profesional hace que cada visita sea una experiencia única y placentera.
          </p>
        </div>
      </header>
      <footer className='w-full md:w-2/3 h-[483px] md:h-[820px] relative overflow-hidden'>
        <div
          className='absolute w-full md:w-[940px] h-[483px] md:h-[820px] z-10'
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 65%)'
          }}
        ></div>
        <Image src={portfolioImage} alt='Carolina Pereyra' className='absolute md:-top-20 md:left-14 z-0' />
      </footer>
    </section>
  )
}
