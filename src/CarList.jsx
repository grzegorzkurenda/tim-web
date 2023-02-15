import "./test.css"
import plus from "./icon/plus.png"
import trash from "./icon/trash.png"
import pen from "./icon/pen.png"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const CarList = ({ cars }) => {

const edit = (id) => console.log(id);
const remove = (id) => console.log(id);
const add = (id) => console.log("add");

const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
    return(
      <div className="limiter">
  <div className="container-table100">
  <div className="wrap-table100">
    <div> {count}</div>
<div className="containerBtnBig" onClick={()=> add()}>
<img className="btnBig" src={plus} alt="plus"/>
<div className="btnBigText">Dodaj nowy</div>
</div>

<button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
       <br></br>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
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
           <td className="column1">{ car.model }</td>
           <td className="column2">Make: {car.make}</td>
           <td className="column3">horsePower:{car.horsePower}</td>
           <td className="column4">{car.engineSize}</td>
           <td className="column5"> <button onClick={()=> edit(car.id)}><img className="btn" src={pen} alt="edit"/></button></td>
           <td className="column6"><button onClick={()=> remove(car.id)}><img className="btn" src={trash} alt="remove"/> </button></td>
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