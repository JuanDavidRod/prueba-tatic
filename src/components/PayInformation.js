import { useEffect, useState } from "react"

import PaySummary from './PaySummary'
import PayInvoice from './PayInvoice'
import PayTotals from './PayTotals'
import '../css/Pay.css'

import info_events from "../data/info_events"

const PayInformation = ({numberTikets, eventSelected}) => {
  const [nameEvent, setNameEvent] = useState('')
  const [tariffEvent, setTariffEvent] = useState('')

  useEffect( () => {
    const eventFind = info_events.find( (e) =>  e.id === eventSelected)
    setNameEvent(eventFind.name)
    setTariffEvent(eventFind.tariff)
  }, [eventSelected])
  
  return (
    <section className='pay_information'>
        <div className='row'>
            <div className='col-12 col-sm-7'>
                <PaySummary
                  nameEvent={nameEvent}
                />
                <PayInvoice/>
            </div>
            <div className='col-12 col-sm-5'>
                <PayTotals
                  numberTikets={numberTikets}
                  tariffEvent={tariffEvent}
                />
            </div>
        </div>        
    </section>
  )
}

export default PayInformation