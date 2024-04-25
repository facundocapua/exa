'use server'

import { getToken } from 'api'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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

export const logCustomerOut = async () => {
  cookies().set('auth_jwt', '', {
    maxAge: -1
  })
  revalidateTag('auth')
  revalidateTag('customer')
  redirect('/')
}
