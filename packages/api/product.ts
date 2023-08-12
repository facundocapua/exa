import type { Product } from './types'

export const getFeaturedProducts = async (): Promise<Array<Product>> => {
  const data = [
    {
      id: '1',
      name: 'Product 1',
      brand: {
        name: 'Brand 1',
        slug: 'brand-1'
      },
      slug: 'product-1',
      images: [
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg'
      ],
      price: 10000,
      salePrice: 8000
    },
    {
      id: '2',
      name: 'Product 2',
      slug: 'product-2',
      brand: {
        name: 'Brand 1',
        slug: 'brand-1'
      },
      images: [
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg'
      ],
      price: 10000,
      salePrice: 8000
    },
    {
      id: '3',
      name: 'Product 3',
      slug: 'product-3',
      brand: {
        name: 'Brand 1',
        slug: 'brand-1'
      },
      images: [
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg'
      ],
      price: 10000,
      salePrice: 8000
    },
    {
      id: '4',
      name: 'Product 4',
      slug: 'product-4',
      brand: {
        name: 'Brand 1',
        slug: 'brand-1'
      },
      images: [
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg'
      ],
      price: 10000,
      salePrice: 8000
    },
    {
      id: '5',
      name: 'Product 5',
      slug: 'product-5',
      brand: {
        name: 'Brand 1',
        slug: 'brand-1'
      },
      images: [
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg'
      ],
      price: 10000,
      salePrice: 8000
    },
    {
      id: '6',
      name: 'Product 6',
      slug: 'product-6',
      brand: {
        name: 'Brand 1',
        slug: 'brand-1'
      },
      images: [
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg'
      ],
      price: 10000,
      salePrice: 8000
    }
  ]

  return new Promise((resolve) => {
    resolve(data)
  })
}