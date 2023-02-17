import { useParams } from "react-router-dom"
import useGetCar from "../useGetCar";
import CarDetail from "./cardetails";

const CarDetails = () => {
    const { id } = useParams();
    const { error, isPending, data: car } = useGetCar(id)
    // console.log(car)
    // console.log(error)
    // console.log(isPending)
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {car && <CarDetail car={car} />}
        </div>
    )
}

export default CarDetails;