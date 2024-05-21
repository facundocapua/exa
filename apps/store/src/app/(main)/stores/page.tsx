import StoreLocator from '@/components/stores/StoreLocator'
import { getSalons } from 'api'
import { Metadata } from 'next'
import { Breadcrumb } from 'ui/server'

export const metadata: Metadata = {
  title: 'Buscador eXa Pros | eXa Beauty Store',
  description: 'Explora los profesionales asociados y encuentra el que mejor se adapte a tus necesidades. Distribuidor oficial de Framesi, Framar, Kerastase y LOreal Professionnel.',
  openGraph: {
    title: 'Buscador eXa Pros | eXa Beauty Store',
    description: 'Explora los profesionales asociados y encuentra el que mejor se adapte a tus necesidades. Distribuidor oficial de Framesi, Framar, Kerastase y LOreal Professionnel.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'eXa Beauty Solutions',
    url: 'https://exabeauty.com.ar/stores',
    images: [
      {
        url: 'https://cdn.exabeauty.com.ar/exa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Buscador eXa Pros | eXa Beauty Store'
      }
    ]
  },
  twitter: {
    card: 'summary',
    creator: '@eXaBeautyOk',
    title: 'Buscador eXa Pros | eXa Beauty Store',
    description: 'Explora los profesionales asociados y encuentra el que mejor se adapte a tus necesidades. Distribuidor oficial de Framesi, Framar, Kerastase y LOreal Professionnel.',
    site: '@eXaBeautyOk'
  }
}

export default async function Stores () {
  const stores = await getSalons()
  const brecrumbs = [{
    name: 'Buscador de profesionales',
    url: '/stores',
    current: true
  }]

  return (
    <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Buscador de profesionales</h1>
      </div>

      <StoreLocator stores={stores} />
    </main>
  )
}
