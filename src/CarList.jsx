import { Link, useHistory } from "react-router-dom"

// import "./test.css"
import "./CarList.css"
import plus from "./icon/plus.png"

const CarList = ({ cars }) => {
  const history = useHistory();
  const add = () => history.push('/create');


  return (
    <div className="container-table100">
      <div className="wrap-table100">
        <button className="containerBtnBig" onClick={() => add()}>
          <img className="btnBig" src={plus} alt="plus" />
          <div className="btnBigText">Dodaj nowy</div>
        </button>
        <div className="table100">
          <table>
            <thead>
              <tr className="table100-head">
                <th className="column1">Model</th>
                <th className="column2">Make</th>
                <th className="column3">HorsePower</th>
                <th className="column4">EngineSize</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id} >
                  <td className="column1"><Link to={`/car/${car.id}`}>{car.model}</Link></td>
                  <td className="column2"><Link to={`/car/${car.id}`}>{car.make}</Link></td>
                  <td className="column3"><Link to={`/car/${car.id}`}>{car.horsePower}</Link></td>
                  <td className="column4"><Link to={`/car/${car.id}`}>{car.engineSize}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CarList;