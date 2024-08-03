import AboutMe from '@/components/AboutMe'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/sobre-mi`
  }
}

export default function AboutMePage () {
  return (
    <main className='max-w-7xl mx-auto'>
      <AboutMe />
    </main>
  )
}
