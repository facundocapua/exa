import { Html, Tailwind, Container, Img, Section, Text, Link, Button, Hr } from '@react-email/components'

export default function NewOrderEmail () {
  return (
    <Html lang="es" dir="ltr">
      <Tailwind>
        <Section className='bg-black font-sans text-white'>
          <Container className='my-4 p-4 max-w-[600px]'>
            <Section>
              <Img src="https://cdn.exabeauty.com.ar/gp-logo-email.jpg" alt="Gonzalo Alonso" width="130" height="61" className='mx-auto'/>
              <h1 className='text-3xl text-center'>¡Tu pedido está en camino!</h1>
            </Section>
            <Section>
              <p className='text-xl my-8'>Hola {'{{ first_name }}'},</p>
              <p>Tu pedido <strong>{'{{ display_id }}'}</strong> fue despachado por Andreani y pronto lo recibirás en tu domicilio.</p>
              <p>El número de seguimiento es <strong>{'{{ tracking_code }}'}</strong>.</p>
            </Section>
            <Section className='text-center my-12'>
              <Button className='bg-[#E8A436] text-white px-4 py-2 rounded-md' href={'https://www.andreani.com/envio/{{ tracking_code }}'}>Ver pedido</Button>
            </Section>
            <Section>
              <Text className='text-center'>Si tienes alguna pregunta, por favor responde a este correo.</Text>
              <Text className='text-center'>Gracias por confiar en <Link href="https://gonzaloalonso.exapro.com.ar/">Gonzalo Alonso Hair Studio</Link>.</Text>
            </Section>
            <Hr className='border-gray-400' />
            <Section>
              <Text className='text-center'>Desarrollado y mantenido por <Link href="https://exabeauty.com.ar/">eXa Beauty Solutions</Link>.</Text>
            </Section>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  )
}
