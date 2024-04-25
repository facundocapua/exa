'use server'

import { getToken } from 'api'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export const logCustomerIn = async (
  _currentState: unknown,
  formData: FormData
) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await getToken(email, password).then((token) => {
      revalidateTag('customer')
      cookies().set('auth_jwt', token, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production'
      })
    })
  } catch (error: any) {
    return error.toString()
  }
}
