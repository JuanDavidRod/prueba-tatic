import React from 'react'

const PayTotals = () => {
  return (
    <article className='pay pay_information_totals'>
        <div className='d-flex justify-content-between mb-3 '>
            <h2>Total</h2>
            <h2>$ 549.11</h2>
        </div>

        <div className='mb-4 tickets_info'>
            <h3>Boletos</h3>
            <div className='d-flex justify-content-between'>
                <p>Total boletos: $ 229.00 &times; 2</p>
                <p>$ 458.00</p>
            </div>
        </div>

        <div className='mb-4 seller_info'>
            <h3>Notas del Vendedor</h3>
            <p>Por motivos de salud se solicitara el carnet de vacunación con la prueba de vacuna contra el COVID - 19 para niños de 5 a 11 años. Se solicitara el uso de tapabocas en el lugar del evento.</p>
        </div>

        <div className='mb-4 seller_info'>
            <h3>Impuestos</h3>
            <div className='d-flex justify-content-between'>
                <p>Total boletos: $ 229.00 &times; 2</p>
                <p>$ 458.00</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Uso de pagina web: </p>
                <p>$ 1.00</p>
            </div>
        </div>

        <button className='btn btn-outline-warning btn-sm mb-3'>Cancelar Orden</button>

        <p className='mb-4'><strong>* No se realizan devioluciones de dineo</strong></p>
        
        <div className="mb-4">
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" >
                        Acepto los terminos y condiciones de uso de mi información
                    </label>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-success'>Pagar Orden</button>
        </div>
    </article>
  )
}

export default PayTotals