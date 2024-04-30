'use server'

import type { OrderReturnRequest } from 'api'
import { sendOrderReturnRequest } from 'api'
import { redirect } from 'next/navigation'

const saveOrderReturnRequest = async (data: OrderReturnRequest) => {
  try {
    await sendOrderReturnRequest(data)
    return { success: true, message: '' }
  } catch (error: any) {
    return { success: false, message: error.toString() }
  }
}

export const sendReturnForm = async (currentState: unknown, formData: FormData) => {
  const data = {
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    order_number: formData.get('order_number'),
    notes: formData.get('notes')
  } as OrderReturnRequest

  const result = await saveOrderReturnRequest(data)
  if (result.success) {
    redirect('/arrepentimiento/success')
    return
  }

  return result.message
}
