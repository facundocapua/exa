import Image from 'next/image'
import portfolioImage from '../../public/about-me/1.jpg'

export default function AboutMe () {
  return (
    <section className='flex w-full flex-col-reverse md:flex-row-reverse mb-10'>
      <header className='w-full md:w-1/2 px-2 md:px-4 z-10'>
        <h1 className='text-4xl md:text-4xl font-black font-custom uppercase my-4 text-secondary-500 '>Sol <span className='text-primary-400'>Squaglia</span></h1>
        <div className='flex flex-col gap-6 px-2 md:px-0 text-gray-700'>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Sed porta ullamcorper massa. Etiam convallis ac magna ac blandit. In aliquet tortor vel quam dignissim, nec tincidunt justo iaculis.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Maecenas suscipit neque lorem, lacinia vehicula ipsum laoreet eget. Mauris ornare ornare ultricies. Praesent at sapien accumsan massa vestibulum finibus.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Ut vel ligula in enim egestas molestie posuere quis purus. Suspendisse at sollicitudin dui, in facilisis erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vehicula iaculis posuere. Pellentesque mollis tempor tellus quis bibendum. Fusce tellus libero, rhoncus eu ex quis, pretium tempor lorem.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id tellus et lorem aliquet pulvinar. Pellentesque efficitur iaculis ex, ac consequat est cursus ut. In luctus purus sit amet tortor lobortis vulputate.
          </p>
          {/* @ts-ignore */}
          <p style={{ textWrap: 'balance' }}>
            Suspendisse placerat imperdiet augue quis commodo. Suspendisse rhoncus risus in mauris maximus, ac accumsan justo rhoncus. Aliquam magna lacus, varius at suscipit eleifend, euismod vel lacus. Proin ex diam, tempor non tincidunt luctus, efficitur vel felis. Duis id mattis lacus. Nullam bibendum justo vitae consequat bibendum.
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
