import { Html, Tailwind, Container, Img, Section, Row, Column } from '@react-email/components'

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
                <Column>
                  <Img src="{{this.thumbnail}}" width="40"/> {'{{ this.title }}'} x {'{{ this.quantity }}'}
                </Column>
                <Column>
                  {'{{ this.price }}'}
                </Column>
              </Row>
              {'{{/each}}'}
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
