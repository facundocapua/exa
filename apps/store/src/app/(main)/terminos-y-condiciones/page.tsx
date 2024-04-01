import { Breadcrumb } from 'ui/server'

export default function TermsAndConditionsPage () {
  const brecrumbs = [
    {
      name: 'Términos y condiciones',
      url: '/terminos-y-condiciones',
      current: true
    }
  ]

  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-12">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">Términos y Condiciones</h1>
      </div>

      <div className="pb-24">
        <p className='pt-4'>Los presentes términos y Condiciones Generales (en adelante, los “Términos y Condiciones”) regularán y serán de aplicación a la navegación de la página web www.exabeauty.com.ar (propiedad de eXa Beauty Solutions) y todos los actos que puedan efectuarse en virtud del uso de la misma.</p>

        <h2 className="text-xl font-medium py-8">TÉRMINOS GENERALES</h2>

        <h3 className='text-lg pb-4'>1 - ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES</h3>
        <p>La navegación y el uso de la página web www.exabeauty.com.ar (en adelante website) implican el conocimiento y la aceptación de los términos y condiciones, en caso de desacuerdo el usuario deberá abstenerse de utilizar el website y/o los servicios por él ofrecidos. Por “Usuario” del website se entiende tanto a los registrados como a los visitantes.</p>

        <h3 className='text-lg py-4'>2 - MODIFICACIÓN</h3>
        <p>Los Términos y Condiciones podrán ser sustituidos o sufrir modificaciones en cualquier momento y a exclusivo criterio de eXa Beauty Solutions, y no se requerirá a los Usuarios su consentimiento. Para las transacciones en curso que hayan comenzado con anterioridad a dichas modificaciones, subsistirán las condiciones vigentes al momento de su concertación, a menos que las nuevas modificaciones introducidas fueran más convenientes para el Usuario.
          eXa Beauty Solutions. pondrá un aviso en el website alertando a los Usuarios sobre estos cambios, durante un tiempo razonable. Sin perjuicio de lo anterior, los Usuarios son responsables de leer estos Términos y Condiciones cada vez que ingresen al website para ver si han sufrido modificaciones.</p>

        <h3 className='text-lg py-4'>3 - INTERRUPCIÓN DEL SERVICIO. EXCLUSIÓN DE RESPONSABILIDAD</h3>
        <p>eXa Beauty Solutions se reserva el derecho de interrumpir, suspender o modificar en cualquier momento los servicios ofrecidos en el presente website, ya sea en forma permanente o transitoria. No se requerirá la conformidad de los Usuarios, ni será necesario aviso previo alguno. Él acceso al website no está garantizado por eXa Beauty Solutions No obstante lo mencionado anteriormente, si la suspensión o interrupción mencionada no obedeciere a razones de fuerza mayor o caso fortuito, eXa Beauty Solutions se compromete a cumplir las prestaciones que estuvieran pendientes al momento de la suspensión o interrupción.
          eXa Beauty Solutions no garantiza que el website se encuentre libre de virus, O cualquier otro elemento que pueda llegar a dañar o alterar el normal funcionamiento de un ordenador. Es responsabilidad y obligación exclusiva del Usuario contar con las herramientas adecuadas para detectar, desinfectar y/o prevenir cualquier tipo de elementos y/o posibles daños de esta naturaleza</p>

        <h3 className='text-lg py-4'>4 - REGISTRACIÓN</h3>
        <p>La registración es gratuita y obligatoria para poder acceder a los servicios ofrecidos en el website. Es obligatorio completar el formulario en todos los campos con datos válidos y verdaderos, de manera exacta y precisa. Para un correcto funcionamiento del sistema, es necesario que los Usuarios mantengan sus datos actualizados. eXa Beauty Solutions podrá proceder a verificar la identidad del Usuario y/o de los datos consignados por éste.
          eXa Beauty Solutions no se responsabiliza por la veracidad o certeza de los datos provistos por los Usuarios. Asimismo, eXa Beauty Solutions se reserva el derecho de suspender temporal o definitivamente a los Usuarios en caso de incumplimiento de los Términos y Condiciones, como así también de rechazar solicitudes.
          Los Usuarios accederán a su Cuenta Personal (la “Cuenta”) mediante un nombre de Usuario y una clave personal que deberán escoger. En caso de que estos datos sean olvidados por el Usuario, eXa Beauty Solutions cuenta con un servicio de ayuda para recuperarlos.
          El nombre de usuario y clave son proporcionados por cada usuario siendo estos responsables por el uso y transmisión de esos datos acarreando las consecuencias de la divulgación de los mismos.</p>

        <h3 className='text-lg py-4'>5 - DATOS PERSONALES</h3>
        <p>A efectos de requerir los servicios ofrecidos en el website, los usuarios deben brindar ciertos datos personales (nombre y apellido, domicilio, cuenta de e-mail, documento de identidad) los que se incorporarán a una base de datos con los alcances de la ley 25.326 imperante en la República Argentina.
          Los datos referidos a las tarjetas de crédito son encriptados, asegurando así que se mantengan en total confidencialidad y no puedan ser vistos por otras personas.
          Al registrarse en el website y formar parte de la Base General de Clientes, los Usuarios aceptan que eXa Beauty Solutions se comunique con ellos por vía postal, telefónica o electrónica para enviar información que la Empresa considere, a su exclusivo criterio, que pueda ser de su interés, incluyendo publicidad e información sobre ofertas y promociones. En caso de que los Usuarios no deseen ser contactados con estos fines, podrán manifestárselo fehacientemente a eXa Beauty Solutions, quien procederá a interrumpir este tipo de comunicaciones en el menor tiempo que le sea posible.</p>

        <h3 className='text-lg py-4'>6 - COOKIES</h3>
        <p>El website puede utilizar un sistema de seguimiento mediante “cookies”, para que el acceso a la información, al pasar de página en página, se realice con mayor rapidez. También ayuda en algunos casos a identificar a los Usuarios, sin necesidad de solicitarles la clave de acceso una y otra vez.
          Estas cookies son pequeños archivos que envía la página visitada y se alojan en el disco duro del ordenador, ocupando poco espacio.
          Se hace saber a los Usuarios que utilizando las opciones de su navegador podrán limitar o restringir según su voluntad el alojamiento de estas “cookies”, aunque es desaconsejable restringirlas totalmente.
          El sistema podrá recoger información sobre sus preferencias e intereses. En el caso de que esto ocurra, la información será utilizada exclusivamente con fines estadísticos para mejorar los servicios que se prestan en el website eXa Beauty Solutions. aplicará, en la mayor medida en que sea posible, procedimientos de disociación de la información de modo que los titulares de los datos sean inidentificables.</p>

        <h3 className='text-lg py-4'>7 - DISPONIBILIDAD DE LOS PRODUCTOS OFRECIDOS</h3>
        <p>La venta de los productos se encuentra sujeta a disponibilidad, considerando ello, en caso de que el o los productos seleccionados se encontraren agotados o demorados, eXa Beauty Solutions se comunicará con el Usuario y lo invitará a que elija una de las siguientes opciones:
          -Continuar esperando la entrega del producto elegido (en caso de demora).
          -Cancelación de la compra y devolución del importe por el medio de pago original.
          -Optar por un producto alternativo que le ofrezca eXa Beauty Solutions para el caso particular.
          Cuando el Usuario opte por cancelar la compra, se devolverá el importe abonado según el medio de pago que se haya elegido oportunamente.
          En el caso de que el Usuario opte por el producto alternativo que le ofrece eXa Beauty Solutions, éste deberá contener características iguales o superiores. En ningún caso se le pedirá al Usuario que abone sumas suplementarias o que se haga cargo de las diferencias, siempre que el producto elegido por el mismo no supere por más de un 30% en precio al producto solicitado originalmente.”
          *La variación del 30% se toma a partir del precio al momento del cambio. Importante: para las situaciones contempladas en este apartado, el Usuario tendrá un plazo de diez días para elegir una de las opciones mencionadas. En caso de que el Usuario guarde silencio al respecto, eXa Beauty Solutions podrá presumir que ha optado por la cancelación de la compra, y procederá a la devolución del importe abonado, ya sea por el medio de pago original.</p>

        <h3 className='text-lg py-4'>8 - DEVOLUCIÓN DEL IMPORTE ABONADO</h3>
        <p>En los casos mencionados en el punto anterior en que el Usuario haya optado por la devolución del importe abonado, deberá tener en cuenta que el reintegro puede demorar algunos días, debido a plazos y cuestiones administrativas.
          Para los casos de devolución vía depósito bancario, la cuenta bancaria deberá estar a nombre del titular de la Cuenta de Usuario desde donde se haya realizado la operación. En caso de que no coincidan las titularidades, se requerirá la expresa autorización del titular de la Cuenta de Usuario como condición indispensable previa al depósito.</p>

        <h3 className='text-lg py-4'>9 - PROMOCIONES</h3>
        <p>Las ofertas y promociones de productos que se difundan tendrán validez desde la fecha indicada hasta la de finalización de la oferta. Los términos y condiciones de las mismas serán comunicados en el website, y estarán siempre sujetas a la existencia en stock de los productos ofrecidos.</p>

        <h3 className='text-lg py-4'>10 - IMPUESTO AL VALOR AGREGADO (IVA)</h3>
        <p>Todos los precios expresados en el website incluyen IVA, salvo que se indique lo contrario.</p>

        <h3 className='text-lg py-4'>11 - DERECHO DE ARREPENTIMIENTO. DEVOLUCIÓN DE LOS PRODUCTOS</h3>
        <p>El Usuario tendrá derecho a devolver los productos adquiridos en el website durante el plazo de 10(diez) días, contados a partir de la entrega del pedido, sin responsabilidad alguna. Para esto deberá notificar de manera fehaciente a eXa Beauty Solutions, dentro del plazo señalado, y poner a su disposición el o los productos adquiridos. Los productos deberán estar en el mismo estado en que fueron recibidos, sin haber sido utilizados, y con el embalaje original. eXa Beauty Solutions devolverá al Usuario todos los importes recibidos. Los gastos de devolución que se incurran dentro de la República Argentina correrán por cuenta de eXa Beauty Solutions Asimismo, si él o los productos presentaren algún defecto de fabricación, hubieren sufrido roturas o deterioros en tránsito, o fueren despachados equivocadamente, el Usuario deberá comunicarse con el Centro de Atención al Cliente dentro del plazo mencionado en el párrafo anterior, para que eXa Beauty Solutions proceda, según corresponda, a gestionar el re-despacho de la compra, o pasar a retirar la orden. Los productos no deben haber sido utilizados, y deben encontrarse en las mismas condiciones en que fueron recibidos, con sus embalajes y etiquetas. Por ejemplo, y a mero título ilustrativo, si el producto se encuentra en un envoltorio (“blíster”) plástico, éste debe ser abierto prolija y cuidadosamente, pues de lo contrario no podrá realizarse el cambio”.</p>

        <h3 className='text-lg py-4'>12 - MONEDA</h3>
        <p>Todos los precios en el website están expresados en pesos argentinos, moneda de curso legal de la República Argentina. la entidad financiera que provea los medios de pagos en los distintos países hará la conversión de acuerdo a las normas imperantes en dicha materia.</p>

        <h3 className='text-lg py-4'>13 - ENVÍO DE PRODUCTO. TIEMPO DE ENTREGA</h3>
        <p>Las entregas se realizarán en la dirección que el Usuario indique. La validez de la misma es de su exclusiva responsabilidad. No se entregarán órdenes a casillas de correo (P.O. Box).
          El tiempo de entrega depende de la disponibilidad del producto, del tiempo de envío y de la aprobación del medio de pago. Los días que se indiquen son estimativos.
          Al realizar una compra, el Usuario recibe en su casilla de correo electrónico una confirmación de que la orden de pedido ha sido aceptada, junto a un número de seguimiento que podrá utilizar para ver el estado del mismo.
          El tiempo de entrega de la totalidad de la orden, así como su costo, será informado al Usuario antes de aceptar la compra.</p>

        <h3 className='text-lg py-4'>14 - GASTOS DE ENVÍO</h3>
        <p>El Usuario será claramente informado de los costos de entrega antes de realizar la compra. Estos costos son calculados en función del peso total y/o el volumen total del envío, y también dependen de la zona del domicilio de entrega.
          Los costos de envío serán discriminados como ítem separado dentro de la factura. eXa Beauty Solutions está siempre trabajando para mejorar la calidad y el costo de entrega para sus clientes. Por este motivo, dichos costos y las políticas de envío se hallan sujetos a cambio sin previo aviso.</p>

        <h3 className='text-lg py-4'>15 - HORARIOS Y LUGAR DE ENTREGA</h3>
        <p>Los productos serán entregados de lunes a viernes, entre las 9:00 y las 18:00 horas (hora local), con excepción de los feriados nacionales. Los Usuarios no podrán elegir ni el horario ni el día en que se entregarán el o los productos adquiridos, los productos serán entregados en el domicilio indicado por el usuario</p>

        <h3 className='text-lg py-4'>16 - CONSULTA SOBRE EL ESTADO DEL ENVÍO</h3>
        <p>El estado (“tracking”) del pedido podrá ser consultado en cualquier momento por el cliente, utilizando el número de seguimiento recibido vía mail.
          En caso de no poder acceder al seguimiento del pedido, el Usuario podrá consultarlo directamente con Atención al Cliente.</p>

        <h3 className='text-lg py-4'>17 - FACTURACIÓN</h3>
        <p>Junto con el producto será remitida la factura correspondiente. Las facturas son emitidas por eXa Beauty Solutions, con domicilio en Garibaldi 1082, B7000 Tandil, Buenos Aires, Argentina CUIT Nº 20-32000292-4</p>

        <h3 className='text-lg py-4'>18 - CANCELACIÓN DE ÓRDENES DE COMPRA</h3>
        <p>Sin perjuicio de lo establecido en el punto 16, el Usuario podrá cancelar una orden, siempre y cuando ésta no haya sido aún despachada. Para esto deberá ponerse en contacto con eXa Beauty Solutions. dentro de las 24 horas de realizada la compra enviando un e-mail a <a href="mailto:info@exabeauty.com.ar">info@exabeauty.com.ar</a> .
          Si la cancelación de la compra es total, se reintegrará el importe mediante el medio de pago que se utilizó para abonar, o se le podrá dejar como crédito para realizar la compra de otro producto. El Usuario reconoce que, en este caso, eXa Beauty Solutions. deberá realizar otro envío, motivo por el cual deberá cobrar al usuario los costos producidos por esta modificación.</p>

        <h3 className='text-lg py-4'>19 - DECLARACIONES</h3>
        <p>eXa Beauty Solutions no será responsable de la veracidad de la información incorporada al website por terceros. Tampoco será responsable en cuanto haya sido reproducida o comunicada directamente por los Usuarios del website sin verificación por parte de eXa Beauty Solutions. Si algún Usuario se viera afectado por la información a la que se alude en el párrafo anterior, deberá comunicárselo a eXa Beauty Solutions por mail o correo postal, a fin de que se proceda a la supresión de la misma.</p>

        <h3 className='text-lg py-4'>20 - DERECHOS RESERVADOS. PROPIEDAD INTELECTUAL</h3>
        <p>Todos los derechos del presente website están reservados y corresponden a eXa Beauty Solutions.
          El contenido del presente website, incluyendo, aunque no limitado al texto, logos, gráficos, y todo el diseño en general, así como su base de datos y software, es de propiedad de eXa Beauty Solutions. o tiene derecho a usarlo en virtud de licencias de uso otorgadas y se encuentra protegido por las legislación nacional e internacional vigente sobre propiedad intelectual.</p>

        <h3 className='text-lg py-4'>21 - RAZÓN SOCIAL Y DOMICILIO</h3>
        <p>La razón social de la empresa es eXa Beauty Solutions., con domicilio en Garibaldi 1082, B7000 Tandil, Buenos Aires, Argentina CUIT N.º 20-32000292-4</p>

        <h3 className='text-lg py-4'>22 - NOTIFICACIONES</h3>
        <p>Todas las notificaciones y/o comunicaciones que deban efectuarse por el uso de website bajo estos Términos y Condiciones Generales, deberán realizarse por escrito: (i) al Usuario: mediante correo electrónico, a la cuenta de correo consignada por éste, o por carta documento, al domicilio declarado en el formulario de registración; (ii) a eXa Beauty Solutions.: a la cuenta de correo electrónico <a href="mailto:info@exabeauty.com.ar">info@exabeauty.com.ar</a>, o a su domicilio legal indicado en el punto anterior , Buenos Aires, Argentina.</p>

        <h3 className='text-lg py-4'>23 - JURISDICCIÓN Y LEY APLICABLE</h3>
        <p>Los presentes Términos y Condiciones se encuentran regidos sin excepción y en todos sus puntos por las leyes de la República Argentina la jurisdicción competente serán los tribunales ordinarios de Tandil.</p>
      </div>
    </div>
  )
}
