
const PayInvoice = () => {
  return (
    <article className='pay pay_information_invoiceData'>
        <h2 className="mb-3">Informacion de factura</h2>
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Nombre</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder=""/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Apellido</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label className="form-label">State</label>
                <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
                </select>
            </div>
            <div className="col-md-2">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label">
                    Check me out
                </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    </article>
  )
}

export default PayInvoice