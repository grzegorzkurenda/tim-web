import CarList from "./CarList";
import "./Home.css"
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: cars } = useFetch('/api/car')
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {cars && <CarList cars={cars} />}
    </div>
  );
}

export default Home;