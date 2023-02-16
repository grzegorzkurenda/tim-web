import "./test.css"
import plus from "./icon/plus.png"
import trash from "./icon/trash.png"
import pen from "./icon/pen.png"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

const CarList = ({ cars }) => {
  const history = useHistory();
  const edit = (id) => console.log(id);
  const remove = (id) => console.log(id);
  const add = (id) => history.push('/create');
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="limiter">
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
                  <th className="column1">model</th>
                  <th className="column2">Make</th>
                  <th className="column3">horsePower</th>
                  <th className="column4">engineSize</th>
                  <th className="column5">Edit</th>
                  <th className="column6">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cars.map(car => (
                  <tr key={car.id} >
                    <td className="column1"><Link to={`/car/${car.id}`}>{car.model}</Link></td>
                    <td className="column2"><Link to={`/car/${car.id}`}>Make: {car.make}</Link></td>
                    <td className="column3"><Link to={`/car/${car.id}`}>horsePower:{car.horsePower}</Link></td>
                    <td className="column4"><Link to={`/car/${car.id}`}>{car.engineSize}</Link></td>
                    <td className="column5"> <button onClick={() => edit(car.id)}><img className="btn" src={pen} alt="edit" /></button></td>
                    <td className="column6"><button onClick={() => remove(car.id)}><img className="btn" src={trash} alt="remove" /> </button></td>
                  </tr>

                ))}

              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>

  )
}

export default CarList;