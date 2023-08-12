import type { Category } from './types'

export const getCategories = async (): Promise<Array<Category>> => {
  const data:Array<Category> = [
    {
      id: '1',
      name: 'Coloración',
      slug: 'coloracion',
      image: 'https://via.placeholder.com/280x280',
      description: 'Coloración',
      children: [
        {
          id: '11',
          name: 'Oxidantes Y Decoloración',
          slug: 'oxidantes-y-decoloracion',
          image: 'https://via.placeholder.com/280x280',
          description: 'Oxidantes Y Decoloración'
        } as Category,
        {
          id: '12',
          name: 'Protección/Plex',
          slug: 'proteccion-plex',
          image: 'https://via.placeholder.com/280x280',
          description: 'Protección/Plex'
        } as Category,
        {
          id: '13',
          name: 'Tinturas',
          slug: 'tinturas',
          image: 'https://via.placeholder.com/280x280',
          description: 'Tinturas'
        } as Category
      ]
    },
    {
      id: '2',
      name: 'Ciudado',
      slug: 'ciudado',
      image: 'https://via.placeholder.com/280x280',
      description: 'Ciudad',
      children: [
        {
          id: '21',
          name: 'Aceites Y Serum',
          slug: 'aceites-y-serum',
          image: 'https://via.placeholder.com/280x280',
          description: 'Aceites y Serum'
        } as Category,
        {
          id: '22',
          name: 'Acondicionador',
          slug: 'acondicionador',
          image: 'https://via.placeholder.com/280x280',
          description: 'Acondicionador'
        } as Category,
        {
          id: '23',
          name: 'Máscaras Y Tratamientos',
          slug: 'mascaras-y-tratamientos',
          image: 'https://via.placeholder.com/280x280',
          description: 'Máscaras Y Tratamientos'
        } as Category
      ]
    },
    {
      id: '3',
      name: 'Styling',
      slug: 'styling',
      image: 'https://via.placeholder.com/280x280',
      description: 'Styling',
      children: [
        {
          id: '31',
          name: 'Aceites Y Serum',
          slug: 'aceites-y-serum',
          image: 'https://via.placeholder.com/280x280',
          description: 'Aceites y Serum'
        } as Category,
        {
          id: '32',
          name: 'Acondicionador',
          slug: 'acondicionador',
          image: 'https://via.placeholder.com/280x280',
          description: 'Acondicionador'
        } as Category,
        {
          id: '33',
          name: 'Máscaras Y Tratamientos',
          slug: 'mascaras-y-tratamientos',
          image: 'https://via.placeholder.com/280x280',
          description: 'Máscaras Y Tratamientos'
        } as Category
      ]
    },
    {
      id: '4',
      name: 'Uñas',
      slug: 'unas',
      image: 'https://via.placeholder.com/280x280',
      description: 'Uñas',
      children: [
        {
          id: '41',
          name: 'Aceites Y Serum',
          slug: 'aceites-y-serum',
          image: 'https://via.placeholder.com/280x280',
          description: 'Aceites y Serum'
        } as Category,
        {
          id: '42',
          name: 'Acondicionador',
          slug: 'acondicionador',
          image: 'https://via.placeholder.com/280x280',
          description: 'Acondicionador'
        } as Category,
        {
          id: '43',
          name: 'Máscaras Y Tratamientos',
          slug: 'mascaras-y-tratamientos',
          image: 'https://via.placeholder.com/280x280',
          description: 'Máscaras Y Tratamientos'
        } as Category
      ]
    },
    {
      id: '5',
      name: 'Barbería',
      slug: 'barberia',
      image: 'https://via.placeholder.com/280x280',
      description: 'Barbería',
      children: [
        {
          id: '51',
          name: 'Aceites Y Serum',
          slug: 'aceites-y-serum',
          image: 'https://via.placeholder.com/280x280',
          description: 'Aceites y Serum'
        } as Category,
        {
          id: '52',
          name: 'Acondicionador',
          slug: 'acondicionador',
          image: 'https://via.placeholder.com/280x280',
          description: 'Acondicionador'
        } as Category,
        {
          id: '53',
          name: 'Máscaras Y Tratamientos',
          slug: 'mascaras-y-tratamientos',
          image: 'https://via.placeholder.com/280x280',
          description: 'Máscaras Y Tratamientos'
        } as Category
      ]
    },
    {
      id: '6',
      name: 'Electro',
      slug: 'electro',
      image: 'https://via.placeholder.com/280x280',
      description: 'Electro',
      children: [
        {
          id: '61',
          name: 'Aceites Y Serum',
          slug: 'aceites-y-serum',
          image: 'https://via.placeholder.com/280x280',
          description: 'Aceites y Serum'
        } as Category,
        {
          id: '62',
          name: 'Acondicionador',
          slug: 'acondicionador',
          image: 'https://via.placeholder.com/280x280',
          description: 'Acondicionador'
        } as Category,
        {
          id: '63',
          name: 'Máscaras Y Tratamientos',
          slug: 'mascaras-y-tratamientos',
          image: 'https://via.placeholder.com/280x280',
          description: 'Máscaras Y Tratamientos'
        } as Category
      ]
    },
    {
      id: '7',
      name: 'Herramientas',
      slug: 'herramientas',
      image: 'https://via.placeholder.com/280x280',
      description: 'Herramientas',
      children: [
        {
          id: '71',
          name: 'Aceites Y Serum',
          slug: 'aceites-y-serum',
          image: 'https://via.placeholder.com/280x280',
          description: 'Aceites y Serum'
        } as Category,
        {
          id: '72',
          name: 'Acondicionador',
          slug: 'acondicionador',
          image: 'https://via.placeholder.com/280x280',
          description: 'Acondicionador'
        } as Category,
        {
          id: '73',
          name: 'Máscaras Y Tratamientos',
          slug: 'mascaras-y-tratamientos',
          image: 'https://via.placeholder.com/280x280',
          description: 'Máscaras Y Tratamientos'
        } as Category
      ]
    },
    {
      id: '8',
      name: 'Marcas',
      slug: 'marcas',
      image: 'https://via.placeholder.com/280x280',
      description: 'Marcas',
      children: [
        {
          id: '81',
          name: 'Gama Italy',
          slug: 'gama-italy',
          image: 'https://via.placeholder.com/280x280',
          description: 'Gama Italy'
        } as Category,
        {
          id: '82',
          name: 'Gama Professional',
          slug: 'gama-professional',
          image: 'https://via.placeholder.com/280x280',
          description: 'Gama Professional'
        } as Category,
        {
          id: '83',
          name: 'IQ',
          slug: 'iq',
          image: 'https://via.placeholder.com/280x280',
          description: 'IQ'
        } as Category,
        {
          id: '84',
          name: 'GBS',
          slug: 'gbs',
          image: 'https://via.placeholder.com/280x280',
          description: 'GBS'
        } as Category,
        {
          id: '85',
          name: 'Wella Professionals',
          slug: 'wella-professionals',
          image: 'https://via.placeholder.com/280x280',
          description: 'Wella Professionals'
        } as Category
      ]
    }
  ]

  return new Promise((resolve) => {
    resolve(data)
  })
}
