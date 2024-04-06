import { Html, Tailwind, Container, Img, Section, Row, Column, Hr, Text } from '@react-email/components'

export default function NewOrderEmail () {
  return (
    <Html lang="es" dir="ltr">
      <Tailwind>
        <Section className='bg-sky-600 font-sans'>
          <Container className='bg-white my-4 p-4'>
            <Section>
              <Img src="https://mtelzvckwsdkcqbvwewx.supabase.co/storage/v1/object/public/assets/exa.jpg" alt="eXa Beauty Store" width="130" height="130" className='mx-auto'/>
              <h1 className='text-3xl text-center'>¡Gracias por tu compra!</h1>
            </Section>
            <Section>
              <p className='text-xl'>Hola {'{{ shipping_address.first_name }}'},</p>
              <p>Tu orden ha sido recibida y está siendo procesada.</p>
              <p>Recibirás un correo electrónico con la información del envío.</p>
            </Section>
            <Section>
              <h2 className='text-sky-600'>Número de pedido: {'{{ display_id }}'}</h2>
            </Section>
            <Section>
              <h3 className='text-gray-600 font-semibold'>Resumen</h3>
              {'{{#each items}}'}
              <Row>
                <Column className='flex items-center w-4/5'>
                  <Img src="{{this.thumbnail}}" width="40"/>
                  <div className='flex flex-col'>
                    <Text>{'{{ this.title }}'}</Text>
                    <Text className='text-gray-500'>{'{{ this.variant.title }}'}</Text>
                  </div>
                </Column>
                <Column className='w-1/5'>
                  <Text className='text-xs text-gray-500'>{'{{ this.price }}'} x {'{{ this.quantity }}'}</Text>
                  <Text>{'{{ this.totals.total }}'}</Text>
                </Column>
              </Row>
              {'{{/each}}'}
              <Hr className='border-gray-400' />
              <Row>
                <Column className='w-3/5'>
                  <Text>Subtotal</Text>
                </Column>
                <Column>
                  <Text>{'{{ subtotal }}'}</Text>
                </Column>
              </Row>
              <Row>
                <Column className='w-3/5'>
                  <Text>Envío</Text>
                </Column>
                <Column>
                  <Text>{'{{ shipping_total }}'}</Text>
                </Column>
              </Row>
              <Row>
                <Column className='w-3/5'>
                  <Text className='text-2xl'>Total</Text>
                </Column>
                <Column>
                  <Text className='text-2xl'>{'{{ total }}'}</Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <h3 className='text-gray-600 font-semibold'>Envío</h3>
              <Row>
                <Column className='w-1/3'>
                  <h3 className='text-gray-600 font-semibold'>Dirección de envío</h3>
                  <Text>{'{{ shipping_address.first_name }}'} {'{{ shipping_address.last_name }}'}</Text>
                  <Text>{'{{ shipping_address.address_1 }}'}</Text>
                  <Text>{'{{ shipping_address.city }}'}</Text>
                  <Text>{'{{ shipping_address.province }}'}</Text>
                  <Text>{'{{ shipping_address.postal_code }}'}</Text>
                </Column>
                <Column className='w-1/3'>
                  <h3 className='text-gray-600 font-semibold'>Contacto</h3>
                  <Text>{'{{ email }}'}</Text>
                </Column>
                <Column className='w-1/3'>
                  <h3 className='text-gray-600 font-semibold'>Método de envío</h3>
                  <Text>{'{{ shipping_methods.0.shipping_option.name }}'}</Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <h3 className='text-gray-600 font-semibold'>Pago</h3>
              <Row>
                <Column className='w-1/3'>
                  <h3 className='text-gray-600 font-semibold'>Dirección de facturación</h3>
                  <Text>{'{{ billing_address.first_name }}'} {'{{ billing_address.last_name }}'}</Text>
                  <Text>{'{{ billing_address.address_1 }}'}</Text>
                  <Text>{'{{ billing_address.city }}'}</Text>
                  <Text>{'{{ billing_address.province }}'}</Text>
                  <Text>{'{{ billing_address.postal_code }}'}</Text>
                </Column>
                <Column className='w-2/3'>
                  <h3 className='text-gray-600 font-semibold'>Detalles de pago</h3>
                  <Text>{'{{ payments.0.provider_id }}'}</Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <p className='text-center'>Si tienes alguna pregunta, por favor responde a este correo.</p>
              <p className='text-center'>Gracias por confiar en eXa Beauty Store.</p>
            </Section>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  )
}
