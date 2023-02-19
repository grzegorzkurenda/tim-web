import "./cardetails.css";
import heart from "../icon/heart.png";
import heart_empty from "../icon/heart-empty.png";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { render } from "react-dom";

const CarDetail = (props) => {
    const [fav, setFav] = useState('')
    const token = useSelector((state) => state.token.token)
    const history = useHistory();
    const sendDelete = () => {
        fetch('/api/car/' + props.car.id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token.payload}`,
            },
        }).then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not delete that resource');
            }
            history.push('/home');
        })
    }
    const sendFavorite = () => {
        if ((true === props.car.isUserFavourite && fav === heart_empty) || (false === props.car.isUserFavourite && fav === heart)) {
            let url = '/api/car/' + props.car.id
            if (props.car.isUserFavourite === true) {
                url += '/dislike'
            } else {
                url += '/like'
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token.payload}`,
                },
            }).then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not favorite the data');
                }
                history.push('/home');
            })
        } else {
            history.push('/home');
        }
    }
    const changeFav = () => {
        if (fav === '') {
            setFav(props.car.isUserFavourite === true ? heart_empty : heart)
        } else {
            setFav(fav === heart ? heart_empty : heart)
        }
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
            {fav === '' && <button className="fav" onClick={changeFav}><img className="fav" src={props.car.isUserFavourite === true ? heart : heart_empty} alt="fav" /> </button>}
            {fav !== '' && <button className="fav" onClick={changeFav}><img className="fav" src={fav} alt="fav" /> </button>}
            <br></br>
            <button onClick={sendFavorite}>Back</button>
            {props.car.isUserOwner && <button className="editButton" onClick={() => { history.push(`/edit/${props.car.id}`); render() }}>Edit</button>}
            {props.car.isUserOwner && <button className="deleteButton" onClick={sendDelete}>Delete</button>}
        </div>
    )
}

export default CarDetail;