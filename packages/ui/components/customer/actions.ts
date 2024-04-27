'use server'

import { getToken } from 'api'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const generateToken = async (email: string, password: string) => {
  try {
    const token = await getToken(email, password)
    return { token, success: true }
  } catch (error: any) {
    return { error: error.toString(), success: false, token: '' }
  }
}

export const logCustomerIn = async (
  _currentState: unknown,
  formData: FormData
) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { token, success, error } = await generateToken(email, password)

  if (success) {
    revalidateTag('customer')
    cookies().set('auth_jwt', token, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production'
    })
    redirect('/account')
  }

  return error
}

export const logCustomerOut = async () => {
  cookies().set('auth_jwt', '', {
    maxAge: -1
  })
  revalidateTag('auth')
  revalidateTag('customer')
  redirect('/')
}
