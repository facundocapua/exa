import type { State } from './types'

export const states: Array<State> = [
  {
    id: 'Ciudad Autónoma de Buenos Aires',
    name: 'Ciudad Autónoma de Buenos Aires'
  },
  {
    id: 'Buenos Aires',
    name: 'Buenos Aires'
  },
  {
    id: 'Catamarca',
    name: 'Catamarca'
  },
  {
    id: 'Chaco',
    name: 'Chaco'
  },
  {
    id: 'Chubut',
    name: 'Chubut'
  },
  {
    id: 'Córdoba',
    name: 'Córdoba'
  },
  {
    id: 'Corrientes',
    name: 'Corrientes'
  },
  {
    id: 'Entre Ríos',
    name: 'Entre Ríos'
  },
  {
    id: 'Formosa',
    name: 'Formosa'
  },
  {
    id: 'Jujuy',
    name: 'Jujuy'
  },
  {
    id: 'La Pampa',
    name: 'La Pampa'
  },
  {
    id: 'La Rioja',
    name: 'La Rioja'
  },
  {
    id: 'Mendoza',
    name: 'Mendoza'
  },
  {
    id: 'Misiones',
    name: 'Misiones'
  },
  {
    id: 'Neuquén',
    name: 'Neuquén'
  },
  {
    id: 'Río Negro',
    name: 'Río Negro'
  },
  {
    id: 'Salta',
    name: 'Salta'
  },
  {
    id: 'San Juan',
    name: 'San Juan'
  },
  {
    id: 'San Luis',
    name: 'San Luis'
  },
  {
    id: 'Santa Cruz',
    name: 'Santa Cruz'
  },
  {
    id: 'Santa Fé',
    name: 'Santa Fé'
  },
  {
    id: 'Santiago Del Estero',
    name: 'Santiago Del Estero'
  },
  {
    id: 'Tierra Del Fuego',
    name: 'Tierra Del Fuego'
  },
  {
    id: 'Tucumán',
    name: 'Tucumán'
  }
]

export const getState = (id: string) => states.find(state => state.id === id)
