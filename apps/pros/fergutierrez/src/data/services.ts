import service1 from '@public/services/2.jpg'
import service2 from '@public/services/1.jpg'
// import service3 from '@public/services/3.jpg'
import service4 from '@public/services/4.jpg'

export const SERVICES = [
  {
    image: service1,
    title: 'Maquillaje Social',
    link: '/servicios/social'
  },
  {
    image: service2,
    title: 'Maquillaje Novias',
    link: '/servicios/novias'
  },
  // {
  //   image: service3,
  //   title: 'Clases Automaquillaje',
  //   link: '/servicios/automaquillaje'
  // },
  {
    image: service4,
    title: 'Diseño Cejas',
    link: '/servicios/cejas'
  }
]

export const SOCIAL_MAKEUP_SERVICES = [
  {
    name: 'Makeup Express',
    subtitle: 'Para las que no suelen maquillarse',
    description: [
      'Preparación de la piel.',
      'Base, corrector, contorno, bronzer, rubor, labial, sombras suaves y máscaras de pestañas.',
      'Larga duración.'
    ],
    price: '25.000',
    duration: 30,
    image: '/services/social/1.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera reservar un turno para *Makeup Express*.'
  },
  {
    name: 'Makeup Básico',
    subtitle: 'Ideal para realzar tus facciones',
    description: [
      'Preparación de la piel.',
      'Delineados clásicos.',
      'Larga duración.'
    ],
    price: '29.000',
    duration: 45,
    image: '/services/social/2.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera reservar un turno para *Makeup Básico*.'
  },
  {
    name: 'Makeup Full',
    subtitle: 'Para darlo todo en tu evento',
    description: [
      'Ideal para las que les gusta el maquillaje más cargado.',
      'Preparación de la piel.',
      'Distintas técnicas ojos.',
      'Aplicación de piedras.',
      'Larga duración.'
    ],
    price: '32.000',
    duration: 60,
    image: '/services/social/3.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera reservar un turno para *Makeup Full*.'
  }
]

export const SELF_MAKEUP_CLASSES = [
  {
    name: 'Maquillaje de día',
    description: [
      'Aprenderás a armar tu set de maquillaje, preparar tu piel y realizar un maquillaje natural de día.',
      'También vas a recibir tips de cuidados de la piel para mantenerla saludable y radiante a largo plazo.'
    ],
    price: '8.500',
    duration: 90,
    image: '/services/selfmakeup/1.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Maquillaje de día*.'
  },
  {
    name: 'Maquillaje de noche',
    description: [
      'Aprenderás a realizar un maquillaje sofisticado y glamoroso para cualquier ocasión nocturna, desde una cena elegante hasta una fiesta de gala.',
      'Descubrirás técnicas de aplicación de sombras, delineadores y labiales para lograr un look espectacular.'
    ],
    price: '8.500',
    duration: 90,
    image: '/services/selfmakeup/2.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Maquillaje de noche*.'
  },
  {
    name: 'Especial esfumados',
    description: [
      'Aprenderás a dominar la técnica de difuminar las sombras para lograr un efecto suave y elegante en tus ojos.',
      'Te enseñaré trucos y herramientas para que puedas crear distintos looks, desde un look natural hasta un smokey eye intenso.'
    ],
    price: '8.500',
    duration: 90,
    image: '/services/selfmakeup/3.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Especial esfumados*.'
  },
  {
    name: 'Especial delineados',
    description: [
      'Aprenderás a realizar distintos tipos de delineados, desde los clásicos hasta los más atrevidos y modernos.',
      'Te enseñaré técnicas y herramientas para lograr un delineado perfecto, que se adapte a tu forma de ojos y estilo personal.'
    ],
    price: '8.500',
    duration: 90,
    image: '/services/selfmakeup/2.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Especial esfumados*.'
  },
  {
    name: 'Vení con una amiga',
    description: [
      '¿Querés compartir una experiencia única con tu amiga?',
      'Vení a tomar cualquiera de nuestros cursos de automaquillaje y aprendan juntas a resaltar su belleza natural.',
      'No se pierdan la oportunidad de divertirse mientras aprenden nuevas técnicas de maquillaje.'
    ],
    price: '12.500',
    duration: 90,
    image: '/services/selfmakeup/2.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la promo *Vení con una amiga*.'
  },
  {
    name: 'Grupal a domicilio',
    description: [
      '¡Organiza una clase grupal de automaquillaje a domicilio con un mínimo de 4 personas y aprende a sacar el máximo partido a tu belleza natural desde la comodidad de tu hogar!',
      'Disfruta de una experiencia divertida y enriquecedora, con un enfoque personalizado en las necesidades de cada una.'
    ],
    image: '/services/selfmakeup/2.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la promo *Vení con una amiga*.'
  }
]
