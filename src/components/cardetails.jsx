import "./cardetails.css"
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useSelector } from 'react-redux'

const CarDetail = (props) => {
    const token = useSelector((state) => state.token.token)
    const history = useHistory();
    const sendRequest = () => {
        fetch('/api/car/' + props.car.id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token.payload}`,
            },
        }).then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
            }
            history.push('/home');
        })
    }

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
            <button onClick={() => { history.push('/home'); }}>Back</button>
            <button className="editButton" onClick={() => { history.push('/home'); }}>Edit</button>
            <button className="deleteButton" onClick={sendRequest}>Delete</button>
        </div>
    )
}

export default CarDetail;