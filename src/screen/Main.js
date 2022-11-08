import FormTickets from '../components/FormTickets'
import PayInformation from '../components/PayInformation'

const Main = () => {
  return (
    <section className='container'>
      <h1 className="text-center my-4">Compra tus Tickets</h1>
      <FormTickets/>
      <PayInformation/>
    </section>
  )
}

export default Main