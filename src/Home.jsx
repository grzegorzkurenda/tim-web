import CarList from "./CarList";
import "./Home.css"
import useFetch from "./useFetch";

const Home = () =>{    
    const { error, isPending, data: cars } = useFetch('/api/car')

    const test= [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "make": "string",
      "model": "string",
      "engineSize": 0,
      "horsePower": 0
    },
  {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa7",
      "make": "string2",
      "model": "string2",
      "engineSize": 1,
      "horsePower": 1
    },
  {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa8",
      "make": "string3",
      "model": "string3",
      "engineSize": 20,
      "horsePower": 2
    }]
    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { test && <CarList cars={test} /> }
      </div>
    );
}

export default Home;