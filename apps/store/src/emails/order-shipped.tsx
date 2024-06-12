import { Html, Tailwind, Container, Img, Section, Text, Link, Button } from '@react-email/components'

export default function NewOrderEmail () {
  return (
    <Html lang="es" dir="ltr">
      <Tailwind>
        <Section className='bg-sky-600 font-sans'>
          <Container className='bg-white my-4 p-4 max-w-[600px]'>
            <Section>
              <Img src="https://mtelzvckwsdkcqbvwewx.supabase.co/storage/v1/object/public/assets/exa.jpg" alt="eXa Beauty Store" width="130" height="130" className='mx-auto'/>
              <h1 className='text-3xl text-center'>¡Tu pedido está en camino!</h1>
            </Section>
            <Section>
              <p className='text-xl my-8'>Hola {'{{ first_name }}'},</p>
              <p>Tu pedido <strong>{'{{ display_id }}'}</strong> fue despachado por Andreani y pronto lo recibirás en tu domicilio.</p>
              <p>El número de seguimiento es <strong>{'{{ tracking_code }}'}</strong>.</p>
            </Section>
            <Section className='text-center my-12'>
              <Button className='bg-sky-600 text-white px-4 py-2 rounded-md' href={'https://www.andreani.com/envio/{{ tracking_code }}'}>Seguir pedido</Button>
            </Section>
            <Section>
              <Text className='text-center'>Si tienes alguna pregunta, por favor responde a este correo.</Text>
              <Text className='text-center'>Gracias por confiar en <Link href="https://exabeauty.com.ar">eXa Beauty Store</Link>.</Text>
            </Section>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  )
}
