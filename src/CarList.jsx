const CarList = ({ cars }) => {
    return (
      <div className="car-list">
        {cars.map(car => (
          <div className="car-preview" key={car.id} >
            <h2>{ car.model }</h2>
            <p>Make {car.make}</p>
            <p>horsePower {car.horsePower}</p>
            <p>engineSize{car.engineSize}</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default CarList;