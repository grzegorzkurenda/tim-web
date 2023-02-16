import "./cardetails.css"
import { useHistory } from "react-router-dom";

const CarDetail = (props) => {
    const history = useHistory();
    return (
        <div className="detail">
            <h2>Details</h2>
            <img
                src={props.car.photoUrl}
                alt='car'
            />
            <label>Make:{props.car.make}</label>
            <label>model:{props.car.model}</label>
            <label>color:{props.car.color}</label>
            <label>engineSize:{props.car.engineSize}</label>
            <label>horsePower:{props.car.horsePower}</label>
            {/* <label>photoURL:{props.car.photoUrl}</label> */}
            <button onClick={() => { history.push('/home'); }}>Back</button>
        </div>
    )
}

export default CarDetail;