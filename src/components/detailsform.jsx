import {useParams} from "react-router-dom"

const CarDetails = () =>{
    const { id } = useParams();
    const { car } = fetch('/api/car/'+ id, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }, 
    }).then(()=>{
        console.log('get car')
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
)}

export default CarDetails;