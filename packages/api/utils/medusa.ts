import Medusa from '@medusajs/medusa-js'

export const getMedusaUrl = () => {
  return process.env.MEDUSA_BACKEND_URL ?? 'http://localhost:9000'
}

const medusa = new Medusa({
  baseUrl: getMedusaUrl(),
  maxRetries: 3
})

export const initClient = () => {
  return medusa
}
