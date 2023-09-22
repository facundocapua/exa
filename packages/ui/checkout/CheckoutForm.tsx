import ContactInformation from './form/ContactInformation'
import ShippingInformation from './form/ShippingInformation'

type Props = {
  total: number
}

export default function CheckoutForm ({ total }: Props) {
  console.log(total)
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
