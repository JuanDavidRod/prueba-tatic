import ButtonPrimary from "./utils/ButtonPrimary"

const FormTickets = () => {
  return (
    <section className="form_tickets">
      <div className="row mb-5 d-flex justify-content-center">
        <div className="col-12 col-sm-6">
          <div className="form-floating">
            <select className="form-select">
                <option>Seleccione el evento</option>
            </select>
            <label>Proximos eventos</label>
          </div>
        </div>

        <div className="col-12 col-sm-2">
          <div className="form-floating">
            <input className="form-control" type="number"/>
            <label>N° Boletos</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <ButtonPrimary/>
        </div>
      </div>

    </section>
  )
}

export default FormTickets