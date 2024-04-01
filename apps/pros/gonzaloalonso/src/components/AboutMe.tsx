import Image from 'next/image'
import portfolioImage from '../../public/about-me/1.jpg'

export default function AboutMe () {
  return (
    <section className='flex w-full flex-col-reverse md:flex-row mb-10'>
      <header className='w-full md:w-1/2 px-2 md:px-4 z-10'>
        <h1 className='text-4xl md:text-5xl font-semibold my-4'>Gonzalo <span className='text-primary-400'>Alonso</span></h1>
        <div className='flex flex-col gap-6 px-2 md:px-0'>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Reconocido estilista y artista Argentino, actualmente de la ciudad de Tandil. Ha destacado en eventos de moda y estilismo, al ganar el Trend Vision en Nueva York.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Se destaca por un estilo que refleja arrojo y atrevimiento en sus creaciones. Sus bastas colecciones, peinados únicos y trabajos vibrantes de color han recorrido el mundo. Sus trabajos reflejan audacia, arrojo y atrevimiento; sin perder la calidad y profesionalismo que tanto lo caracteriza.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Siempre orientando a sus clientes, estudiando y diagnosticando de manera precisa para obtener un cambio tanto físico como espiritual; fomentando la audacia, realzando virtudes y eliminando tabúes.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Su Studio, Gonzalo Alonso Studio, es conocido por su exclusividad, lujo, profesionalismo, organización y atención detallada a los clientes.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            En el contexto de Wella Company, es Artista exclusivo para la marca, y reconocido por su participación en el concurso Internacional Trend Vision, donde obtuvo el primer puesto con su producción &ldquo;Estilo Pasionista&rdquo;, destacando su talento y creatividad en el ámbito estilístico.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            La filosofía de Gonzalo Alonso en su trabajo se centra en la combinación de audacia y atrevimiento en sus creaciones, reflejando un estilo osado y creativo. Siempre con un enfoque innovador y vibrante en el mundo del estilismo.
          </p>
        </div>
      </header>
      <footer className='w-full md:w-1/2'>
        <div
          className='absolute w-full md:w-[640px] h-[483px] md:h-[720px]'
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 70%)'
          }}
        ></div>
        <Image src={portfolioImage} alt='Gonzalo Alonso' />
      </footer>
    </section>
  )
}
