import { useState } from "react";
import "./createform.css"
import { useHistory } from "react-router-dom";

const Create = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [horsePower, setHorsePower] = useState('');
  const [file, setFile] = useState({});
  const history = useHistory();

  const handleFileChange = (file) => {
    if (!file) {
      setFile('');
      return;
    }
    setFile(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const car = { make, model, color, engineSize, horsePower };
    var formData = new FormData();

    formData.append("file", file);
    formData.append("make", car.make);
    formData.append("model", car.model);
    formData.append("color", car.color);
    formData.append("engineSize", car.engineSize);
    formData.append("horsePower", car.horsePower);

    fetch('api/car', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: formData,
    }).then(() => {
      history.push('/home');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Make:</label>
        <input
          type="text"
          required
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <label>Model:</label>
        <input
          type="text"
          required
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <label>Color:</label>
        <input
          type="text"
          required
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label>EngineSize:</label>
        <input
          type="number"
          required
          value={engineSize}
          onChange={(e) => setEngineSize(e.target.value)}
        />
        <label>HorsePower:</label>
        <input
          type="number"
          required
          value={horsePower}
          onChange={(e) => setHorsePower(e.target.value)}
        />
        <input
          accept=".png"
          type="file"
          required
          onChange={(e) => handleFileChange(e.target.files[0] || null)}
        />
        <button onClick={() => { history.push('/home'); }}>Back</button>
        <button className="add">Save</button>
      </form>
    </div>
  );
}

export default Create;