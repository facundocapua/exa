import Image from 'next/image'
import portfolioImage from '../../public/about-me/1.jpg'

export default function AboutMe () {
  return (
    <section className='flex w-full flex-col-reverse md:flex-row mb-10'>
      <header className='w-full md:w-1/2 px-2 md:px-4 z-10'>
        <h1 className='text-5xl font-semibold leading-loose'>Gonzalo <span className='text-primary-300'>Alonso</span></h1>
        <div className='flex flex-col gap-6 px-2 md:px-0'>
          <p className='text-bal' style={{ textWrap: 'balance' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed facilisis libero. Suspendisse in nibh et elit fringilla auctor eget eu erat. Mauris eget maximus urna, ut pharetra odio. Nullam a feugiat odio. Suspendisse nec urna augue. Fusce ut iaculis mi. Quisque ac laoreet metus. Vivamus sodales ex et dui imperdiet placerat. Integer ut augue enim. Sed hendrerit vel nibh sit amet finibus.</p>
          <p style={{ textWrap: 'balance' }}>Phasellus eget molestie ex. Integer sit amet luctus lacus, vel iaculis tellus. Sed elit magna, vehicula at placerat non, fermentum at metus. In at urna efficitur, interdum ante ac, cursus ex. Vestibulum mattis arcu vel libero ornare finibus. Nulla facilisi. Sed mollis nibh tincidunt rhoncus lacinia. Cras vel lacus finibus, lacinia elit ac, gravida velit. Nam eget convallis lacus, ut laoreet magna. Maecenas arcu purus, posuere sed risus nec, fermentum scelerisque augue. Aenean porta mi non nunc consectetur, volutpat sagittis massa lacinia.</p>
          <p style={{ textWrap: 'balance' }}>Pellentesque pharetra velit non est tincidunt, nec convallis velit ornare. Vivamus at turpis tellus. Mauris dignissim, dolor non efficitur interdum, urna metus eleifend purus, a vestibulum dolor quam sit amet lorem. Sed non enim nec orci blandit commodo non non nunc. Vestibulum eget rutrum felis, ut molestie sapien. Fusce molestie mattis ante sit amet varius. Duis vitae pretium risus. In hendrerit eros arcu, in ornare enim laoreet blandit. Curabitur congue velit velit, sit amet eleifend orci placerat sollicitudin. Vivamus eget aliquam sapien, vitae tincidunt lectus. Aliquam erat volutpat.</p>
        </div>
      </header>
      <footer className='w-full md:w-1/2'>
        <div
          className='absolute w-full h-[450px] md:h-[720px]'
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 75%)'
          }}
        ></div>
        <Image src={portfolioImage} alt='Gonzalo Alonso' />
      </footer>
    </section>
  )
}
