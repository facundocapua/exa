import EmailAddress from './EmailAddress'
// import NewsletterSubscription from './NewsletterSubscriptions'

export default function ContactInformation () {
  return (
    <section>
      <h2 className='font-semibold text-neutral-700 text-xl mb-2'>Información de contacto</h2>

      <EmailAddress />
      {/* <NewsletterSubscription /> */}
    </section>
  )
}
