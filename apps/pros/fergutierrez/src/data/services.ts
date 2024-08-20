import service1 from '@public/services/2.jpg'
import service2 from '@public/services/1.jpg'
import service3 from '@public/services/3.jpg'

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
  {
    image: service3,
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
    name: 'Automaquillaje individual',
    description: [
      'Vas a aprender todos los pasos para lograr un maquillaje según tu estilo y la morfología de tu rostro.'
      // 'También vas a recibir tips de cuidados de la piel para mantenerla saludable y radiante a largo plazo.'
    ],
    topics: [
      'Preparación de la piel',
      'Maquillaje básico de día',
      'Maquillaje básico de noche',
      'Asesoramiento para armar tu kit'
    ],
    price: '8.500',
    classes: 2,
    duration: 60,
    image: '/services/selfmakeup/1.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Automaquillaje individual*.'
  },
  {
    name: 'Perfeccionamientos',
    description: [
      'Clases personalizadas, podes elegir el tema que quieras profundizar.',
      'Trabajaremos para que puedas afianzar tus técnicas y así lograr mayor confianza.'
    ],
    price: '8.500',
    classes: 1,
    duration: 90,
    image: '/services/selfmakeup/2.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Perfeccionamiento*.'
  },
  {
    name: 'Automaquillaje grupal',
    description: [
      'Aprendé a maquillarte y compartí la experiencia con amigas.',
      'Preparación de la piel, maquillaje básico de día y agregamos algunos toques para hacerlo más noche en pocos pasos.',
      'Consejos para que armen el kit básico y muchos tips.',
      'Hasta 3 personas.'
    ],
    price: '8.500',
    classes: 1,
    duration: 120,
    image: '/services/selfmakeup/3.jpg',
    message: '¡Hola! ¿Cómo estás? Quisiera saber más sobre la clase de *Automaquillaje grupal*.'
  }
]
