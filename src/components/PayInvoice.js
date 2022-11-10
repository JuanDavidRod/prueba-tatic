
const PayInvoice = () => {
  return (
    <article className='pay pay_information_invoiceData'>
        <h2 className="mb-3">Informacion de factura</h2>
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" placeholder="Nombres"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Apellido</label>
                <input type="text" className="form-control" placeholder="Apellidos"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Correo</label>
                <input type="email" className="form-control" placeholder="correo electronico"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Celular</label>
                <input type="number" className="form-control" placeholder="Número celular"/>
            </div>
            <div className="col-6">
                <label className="form-label">Ciudad</label>
                <input type="text" className="form-control" placeholder="Ciudad"/>
            </div>
            <div className="col-6">
                <label className="form-label">Dirección</label>
                <input type="text" className="form-control" placeholder="Dirección"/>
            </div>

            <h4>Informacion Tarjeta</h4>
            <div className="col-md-6">
                <label className="form-label">Número tarjeta</label>
                <input type="text" className="form-control" placeholder="Número tarjeta"/>
            </div>
            <div className="col-md-2">
                <label className="form-label">CVC</label>
                <input type="text" className="form-control" placeholder="CVC"/> 
            </div>
            <div className="col-md-2">
                <label className="form-label">Vencimiento</label>
                <select id="inputState" className="form-select">
                    <option selected disabled>Mes</option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero </option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                </select>
            </div>
            <div className="col-md-2">
                <label className="form-label">&nbsp;</label>
                <select id="inputState" className="form-select">
                    <option selected disabled>Año</option>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
            </div>
        </form>
    </article>
  )
}

export default PayInvoice