import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

const CarDetails = () => {
    const token = useSelector((state) => state.token.token)

    const { id } = useParams();
    const { car } = fetch('/api/car/' + id, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token.payload}`,
            'Content-Type': 'application/json',
        },
    }).then((data) => {
        console.log('get car')
        console.log({ data })
    })

    return (
        <div>
            <label>Details</label>
            <label>Make:{car.make}</label>
            <label>model:{car.model}</label>
            <label>color:{car.color}</label>
            <label>engineSize:{car.engineSize}</label>
            <label>horsePower:{car.horsePower}</label>
            <label>photoURL:{car.photoUrl}</label>
            <label>createDate:{car.createDate}</label>
            <label>isUserFavourite:{car.isUserFavourite}</label>
        </div>
    )
}

export default CarDetails;