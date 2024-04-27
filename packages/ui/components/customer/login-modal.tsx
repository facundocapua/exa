'use client'
import type { Customer } from 'api'
import { Modal } from '../generic/modal'
import LoginForm from './login-form'
import { useEffect, useState } from 'react'

type Props = {
  customer?: Customer | null
}

export const LoginModal = ({ customer }: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (customer && customer.id) {
      setIsOpen(false)
    }
  }, [customer])

  return (
    <Modal open={isOpen}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
