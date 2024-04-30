import ReturnForm from './return-form'

type Props = {
  showSuccess?: boolean
}

export const ReturnPage = ({ showSuccess = false }: Props = { showSuccess: false }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">Arrepentimiento</h1>
      </div>

      <div className="pb-24 pt-4">
        <section>
          <p>Según Artículo 34 de la Ley Nº 24.240, art. 1110 CCCN y la Resolución 906/98 de la Secretaría de Industria, Comercio y Minería:</p>
          <p>El consumidor tiene derecho a revocar la presente operación comercial durante el plazo de 10 (DIEZ) días corridos, contados a partir de la fecha en que se entregue la cosa o se celebre el contrato, lo último que ocurra, sin responsabilidad alguna.</p>
          <p>Esta facultad no puede ser dispensada ni renunciada. El vendedor debe informar por escrito al consumidor de esta facultad de revocación en todo documento que con motivo de venta le sea presentado al consumidor. Tal información debe ser incluida en forma clara y notoria. El consumidor debe poner el bien a disposición del vendedor y los gastos de devolución son por cuenta de este último.</p>

          <div className='pt-8'>
            {showSuccess
              ? (
                <div className='px-4 py-8 bg-primary-100 text-primary-800 text-lg rounded-lg'>
                  Hemos recibido tu solicitud de devolución. Te contactaremos en breve.
                </div>
                )
              : (<ReturnForm />)}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReturnPage
