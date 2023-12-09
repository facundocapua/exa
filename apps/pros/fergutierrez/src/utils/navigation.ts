import { randomUUID } from 'node:crypto'

export const navigation = [
  { id: randomUUID(), name: 'Servicios', href: '/servicios' },
  { id: randomUUID(), name: 'Cursos', href: '/cursos' },
  { id: randomUUID(), name: 'Portfolio', href: '/portfolio' },
  { id: randomUUID(), name: 'Tienda', href: '/tienda' }
]
