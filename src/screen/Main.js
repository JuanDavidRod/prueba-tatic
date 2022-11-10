import { useState } from 'react'
import FormTickets from '../components/FormTickets'
import PayInformation from '../components/PayInformation'

const Main = () => {
  const [numberTikets, setNumberTikets] =  useState(0)
  const [eventSelected, setEventSelected] = useState(0)
  const [payShow, setPayShow] =  useState(false)

  return (
    <section className='container'>
      <h1 className="text-center my-4">Compra tus Boletas</h1>
      {
        (!payShow) ? <FormTickets
                        numberTikets = {numberTikets}
                        eventSelected = {eventSelected}
                        setNumberTikets = {setNumberTikets}
                        setEventSelected = {setEventSelected}
                        setPayShow = {setPayShow}
                      />:
                      <PayInformation
                        numberTikets = {numberTikets}
                        eventSelected = {eventSelected}
                      />

      }
      
    </section>
  )
}

export default Main