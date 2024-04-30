'use client'

import { useState } from 'react'
import Input from '../../form/input'
import Textarea from '../../form/textarea'
import ReturnSendButton from './return-send-button'
import { useFormState } from 'react-dom'
import { sendReturnForm } from './actions'

export const ReturnForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    order_number: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [state, formAction] = useFormState(sendReturnForm, null)

  return (
    <form action={formAction}>
      <div className='grid grid-cols-2 gap-4'>
        <Input
          label="Nombre"
          id="first_name"
          name="first_name"
          required={true}
          autoComplete="given-name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <Input
          label="Apellido"
          id="last_name"
          name="last_name"
          required={true}
          autoComplete="family-name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          title="Ingrese un email válido"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Teléfono"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          label="Número de pedido"
          id="order_number"
          name="order_number"
          value={formData.order_number}
          onChange={handleChange}
          required
        />

        <Textarea
          containerClassName='col-span-full'
          label="Motivo del arrepentimiento"
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          required
        />

        {state?.error && <div className="alert alert-danger mt-4">{state.error}</div>}

        <ReturnSendButton>Enviar</ReturnSendButton>
      </div>
    </form>
  )
}

export default ReturnForm
