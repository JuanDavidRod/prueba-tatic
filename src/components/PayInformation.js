import PaySummary from './PaySummary'
import PayInvoice from './PayInvoice'
import PayTotals from './PayTotals'
import '../css/Pay.css'

const PayInformation = () => {
  return (
    <section className='pay_information'>
        <div className='row'>
            <div className='col-12 col-sm-7'>
                <PaySummary/>
                <PayInvoice/>
            </div>
            <div className='col-12 col-sm-5'>
                <PayTotals/>
            </div>
        </div>        
    </section>
  )
}

export default PayInformation