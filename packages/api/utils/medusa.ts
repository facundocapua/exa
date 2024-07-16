import Medusa from '@medusajs/medusa-js'

export const getMedusaUrl = () => {
  return process.env.MEDUSA_BACKEND_URL ?? 'https://backend.exabeauty.com.ar'
}

export const getMedusaRegionId = () => {
  return process.env.MEDUSA_REGION_ID ?? ''
}

export const getMedusaSalesChannelId = () => {
  return process.env.MEDUSA_SALES_CHANNEL_ID ?? ''
}

const medusa = new Medusa({
  baseUrl: getMedusaUrl(),
  maxRetries: 3
})

export const initClient = () => {
  return medusa
}
