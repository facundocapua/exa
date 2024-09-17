import { BankTransferInfo } from './components/bank-transfer-info'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Html, Tailwind, Container, Img, Section, Row, Column, Hr, Text, Button } from '@react-email/components'

export default function NewOrderEmail () {
  return (
    <Html lang="es" dir="ltr">
      <Tailwind>
        <Section className='bg-neutral-600 font-sans text-white'>
          <Container className='my-4 p-4 max-w-[600px]'>
            <Header title='¡Gracias por tu compra!' />
            <Section>
              <p className='text-xl my-8'>Hola {'{{ shipping_address.first_name }}'},</p>
              {'{{#if is_banktransfer}}'}
                <BankTransferInfo />
              {'{{else}}'}
                <p>Tu orden ha sido recibida y está siendo procesada.</p>
                <p>Recibirás un correo electrónico con la información del envío.</p>
              {'{{/if}}'}
            </Section>
            <Section>
              <h2 className='text-neutral-200'>Número de pedido: {'{{ display_id }}'}</h2>
            </Section>
            <Section>
              <h3 className='text-neutral-300 font-semibold'>Resumen</h3>
              {'{{#each items}}'}
              <Row className='mb-4 border-b border-neutral-500'>
                <Column className='flex items-center w-[40px]'>
                  <Img src="{{this.thumbnail}}" width="40"/>
                </Column>
                <Column className='w-3/5 align-top'>
                  <Text className='m-0'>{'{{ this.title }}'}</Text>
                  <Text className='text-neutral-400 m-0'>{'{{ this.variant.title }}'}</Text>
                </Column>
                <Column className='text-right align-top'>
                  <Text className='text-xs text-neutral-400'>{'{{ this.price }}'} x {'{{ this.quantity }}'}</Text>
                </Column>
              </Row>
              {'{{/each}}'}
              <Hr />
              <Row>
                <Column className='w-2/5'>
                  <Text>Subtotal</Text>
                </Column>
                <Column className='text-right'>
                  <Text>{'{{ subtotal }}'}</Text>
                </Column>
              </Row>
              <Row>
                <Column className='w-2/5'>
                  <Text>Envío</Text>
                </Column>
                <Column className='text-right'>
                  <Text>{'{{ shipping_total }}'}</Text>
                </Column>
              </Row>
              <Row>
                <Column className='w-2/5'>
                  <Text className='text-xl'>Total</Text>
                </Column>
                <Column className='text-right'>
                  <Text className='text-xl'>{'{{ total }}'}</Text>
                </Column>
              </Row>
            </Section>
            <Hr className='border-neutral-500' />
            <Section>
              <h3 className='text-neutral-300 font-semibold'>Envío</h3>
              <Row>
                <Column className='w-1/2 align-top'>
                  <Text className='text-neutral-300 font-semibold text-base'>Dirección de envío</Text>
                  <Text>{'{{ shipping_address.first_name }}'} {'{{ shipping_address.last_name }}'}</Text>
                  <Text>{'{{ shipping_address.address_1 }}'}</Text>
                  <Text>{'{{ shipping_address.city }}'}</Text>
                  <Text>{'{{ shipping_address.province }}'}</Text>
                  <Text>{'{{ shipping_address.postal_code }}'}</Text>
                </Column>
                {/* <Column className='w-1/2 align-top'>
                  <Text className='text-neutral-300 font-semibold text-base'>Contacto</Text>
                  <Text>{'{{ email }}'}</Text>
                  <Text className='text-neutral-300 font-semibold text-base'>Método de envío</Text>
                  <Text>{'{{ shipping_methods.0.shipping_option.name }}'}</Text>
                </Column> */}
              </Row>
            </Section>
            <Hr className='border-neutral-500' />
            <Section>
              <h3 className='text-neutral-300 font-semibold'>Pago</h3>
              <Row>
                <Column className='w-1/2 align-top'>
                  <Text className='text-neutral-300 font-semibold text-base'>Dirección de facturación</Text>
                  <Text>{'{{ billing_address.first_name }}'} {'{{ billing_address.last_name }}'}</Text>
                  <Text>{'{{ billing_address.address_1 }}'}</Text>
                  <Text>{'{{ billing_address.city }}'}</Text>
                  <Text>{'{{ billing_address.province }}'}</Text>
                  <Text>{'{{ billing_address.postal_code }}'}</Text>
                </Column>
                {/* <Column className='w-1/2 align-top'>
                  <Text className='text-neutral-300 font-semibold text-base'>Detalles de pago</Text>
                  <Text>{'{{ payments.0.provider_id }}'}</Text>
                </Column> */}
              </Row>
            </Section>
            <Section className='text-center my-12'>
              <Button className='bg-neutral-800 text-white px-4 py-2 rounded-md' href={'https://www.fernandagutierrez.com.ar/order/confirmed/{{ id }}'}>Ver pedido</Button>
            </Section>
            <Footer />
          </Container>
        </Section>
      </Tailwind>
    </Html>
  )
}
