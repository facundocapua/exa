import EmailAddress from './form/EmailAddress'

type Props = {
  total: number
}

export default function CheckoutForm ({ total }: Props) {
  return (
    <form className="mt-6">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <div className="col-span-full">
          <EmailAddress />
        </div>
      </div>
    </form>
  )
}
