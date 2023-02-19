import "./cardetails.css";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { render } from "react-dom";

const CarEdit = (props) => {
    const [make, setMake] = useState(props.car.make);
    const [model, setModel] = useState(props.car.model);
    const [color, setColor] = useState(props.car.color);
    const [engineSize, setEngineSize] = useState(props.car.engineSize);
    const [horsePower, setHorsePower] = useState(props.car.horsePower);
    const token = useSelector((state) => state.token.token)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const car = { make, model, color, engineSize, horsePower };
        var formData = new FormData();

        formData.append("make", car.make);
        formData.append("model", car.model);
        formData.append("color", car.color);
        formData.append("engineSize", car.engineSize);
        formData.append("horsePower", car.horsePower);

        fetch('/api/car/' + props.car.id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token.payload}`
            },
            body: formData,
        }).then(() => {
            history.push(`/car/${props.car.id}`);
            render()
        })
    }

    return (
        <div className="detail">
            <h2>Edit</h2>
            <form onSubmit={handleSubmit}>
                <label>Make:</label>
                <input
                    className="edit"
                    type="text"
                    required
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                />
                <label>Model:</label>
                <input
                    className="edit"
                    type="text"
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
                <label>Color:</label>
                <input
                    className="edit"
                    type="text"
                    required
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <label>EngineSize:</label>
                <input
                    className="edit"
                    type="number"
                    required
                    value={engineSize}
                    onChange={(e) => setEngineSize(e.target.value)}
                />
                <label>HorsePower:</label>
                <input
                    className="edit"
                    type="number"
                    required
                    value={horsePower}
                    onChange={(e) => setHorsePower(e.target.value)}
                />
                <button onClick={() => { history.push(`/car/${props.car.id}`); render() }}>Back</button>
                <button className="add">Save</button>
            </form>
        </div>
    )
}

export default CarEdit;