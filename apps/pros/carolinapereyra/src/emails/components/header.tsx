import { Img, Section } from '@react-email/components'

export const Header = ({ title }: {title: string}) => {
  return (
    <Section>
      <Img src="https://cdn.exabeauty.com.ar/carolinapereyra-logo-email.png" alt="Carolina Pereyra" width="200" height="82" className='mx-auto'/>
      <h1 className='text-3xl text-center'>{title}</h1>
    </Section>
  )
}
