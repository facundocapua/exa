import type { Banner } from './types'

export const getFeaturedBanners = async (): Promise<Array<Banner>> => {
  const data: Array<Banner> = [
    {
      id: '1',
      title: 'Banner 1',
      image: 'https://picsum.photos/300/300',
      link: 'https://google.com'
    },
    {
      id: '2',
      title: 'Banner 2',
      image: 'https://picsum.photos/300/300',
      link: 'https://google.com'
    },
    {
      id: '3',
      title: 'Banner 3',
      image: 'https://picsum.photos/300/300',
      link: 'https://google.com'
    },
    {
      id: '4',
      title: 'Banner 4',
      image: 'https://picsum.photos/300/300',
      link: 'https://google.com'
    }
  ]

  return new Promise((resolve) => {
    resolve(data)
  })
}
