import { Address } from 'api'
import isEqual from 'just-compare'
import omit from 'just-omit'

export const compareAddresses = (address1: Address, address2: Address) => {
  return isEqual(
    omit(address1, [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'metadata',
      'customer_id'
    ]),
    omit(address2, [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'metadata',
      'customer_id'
    ])
  )
}
