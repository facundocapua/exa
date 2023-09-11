import type { State } from './types'

export const states: Array<State> = [
  {
    id: '1',
    name: 'Ciudad Autónoma de Buenos Aires'
  },
  {
    id: '2',
    name: 'Buenos Aires'
  },
  {
    id: '3',
    name: 'Catamarca'
  },
  {
    id: '4',
    name: 'Chaco'
  },
  {
    id: '5',
    name: 'Chubut'
  }
]

export const getState = (id: string) => states.find(state => state.id === id)
