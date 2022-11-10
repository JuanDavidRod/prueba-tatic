
const PaySummary = ({nameEvent}) => {

  return (
    <article className='pay pay_information__summary'>
        <h2 className="mb-3">Pago de Boletas</h2>
        <h4>Entradas para { nameEvent } </h4>

        <p>Boletos disponibles para el 7 de noviembre del 2022</p>
        <p>Estos Boletos seran enviados directamente a tu correo una vez termines la compra. En tu correo electronico llegaran las instrucciones para validar los boletos comprados por nuestra plataforma</p>
    </article>
  )
}

export default PaySummary