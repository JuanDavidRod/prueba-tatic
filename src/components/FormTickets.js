import info_events from "../data/info_events"

const goToPayInfo = (numberTikets, eventSelected, setPayShow) => {
  if (!numberTikets || !eventSelected) { alert('Antes de continuar debes seleccionar un evento y un número de boletos'); return false; }
  setPayShow(true)
}

const FormTickets = ({
    numberTikets, 
    setNumberTikets, 
    eventSelected, 
    setEventSelected, 
    setPayShow}) => {

  return (
    <section className="form_tickets">
      <div className="row mb-5 d-flex justify-content-center">
        <div className="col-12 col-sm-8">
          <div className="form-floating">
            <select className="form-select" value={eventSelected} onChange={(e) => setEventSelected(e.target.value)}>
                <option value="0">Seleccione el evento</option>
                {
                  info_events.map( (event) =>  <option value={event.id} key={event.id}>{event.name}</option> )
                }
            </select>
            <label>Proximos eventos</label>
          </div>
        </div>

        <div className="col-12 col-sm-3">
          <div className="form-floating">
            <input 
              className="form-control" 
              type="number" 
              value={numberTikets}
              onChange={(e) => setNumberTikets(e.target.value)}
            />
            <label>N° Boletos</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={ () => goToPayInfo(numberTikets, eventSelected, setPayShow)}>
            Ir a comprar
          </button>
        </div>
      </div>

    </section>
  )
}

export default FormTickets