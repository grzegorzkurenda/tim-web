import { useParams } from "react-router-dom"
import useGetCar from "../useGetCar";
import CarEdit from "../components/caredit";
const Edit = () => {
    const { id } = useParams();
    const { error, isPending, data: car } = useGetCar(id)
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {car && <CarEdit car={car} />}
        </div>
    )
}

export default Edit;