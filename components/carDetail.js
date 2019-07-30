export default ({data}) => {
  if (!data) return <div />
  return (<span className="col-12">
    <h2 className="text-white">Detalles del vehículo</h2>
    <div className="d-flex justify-content-around">
      <table className="table table-dark">
        <thead>
        <tr className="thead-light">
          <th scope="col">Propiedad</th>
          <th scope="col">Atributo</th>
        </tr>
        </thead>
        <tbody>
        {Object.keys(data.Details).map((row) =><tr key={row}><th className="text-white">{row}</th><th>{data.Details[row]}</th></tr>)}
        </tbody>
      </table>
    </div>

  </span>)
}