export default function PaymentTest ({ className }: {className?: string}) {
  return (
    <div className={className}>
      <span className="font-semibold">Atención:</span> Este método de pago es solo para pruebas. No se debe usar en producción.
    </div>
  )
}
