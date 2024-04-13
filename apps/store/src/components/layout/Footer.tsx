import { FacebookIcon, InstagramIcon, TwitterIcon } from 'ui/server'
import Logo from './Logo'
import { createElement } from 'react'

const navigation = {
  solutions: [
    { name: 'Términos y condiciones', href: '/terminos-y-condiciones' },
    { name: 'Arrepentimiento', href: '/arrepentimiento' }
    // { name: '¿Cómo comprar?', href: '#' }
  ],
  support: [
    { name: 'tel: 249 420-9997 ', href: 'tel:5492494209997' },
    { name: 'whatsapp: +549 249 420-9997 ', href: 'https://api.whatsapp.com/send?phone=5492494209997&text=' },
    { name: 'email: info@exabeauty.com.ar', href: 'mailto:info@exabeauty.com.ar' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/exabeautyok',
      icon: FacebookIcon
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/exabeauty.ok/',
      icon: InstagramIcon
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/eXaBeautyOk',
      icon: TwitterIcon
    }
  ]
}

export default function Footer () {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <div className='flex flex-col gap-y-1 justify-center w-fit items-center'>
              <Logo responsive={false} center={false} />
              <p className="text-sm text-gray-600 font-medium">
                Beauty Solutions
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  {createElement(item.icon, { className: 'h-6 w-6', 'aria-hidden': true })}
                </a>
              ))}
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <ul role="list" className="space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <p className="text-sm leading-6 text-gray-600 font-medium">Contacto</p>
              <ul role="list" className="space-y-2 mt-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-500">&copy; 2024 eXa Beauy Solutions, todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
