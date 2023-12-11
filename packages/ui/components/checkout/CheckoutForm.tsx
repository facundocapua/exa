import ContactInformation from './form/ContactInformation'
import ShippingInformation from './form/ShippingInformation'

export default function CheckoutForm () {
  return (
    <form className="mt-6">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <div className="col-span-full">
          <ContactInformation />
          <ShippingInformation />
        </div>
      </div>
    </form>
  )
}
