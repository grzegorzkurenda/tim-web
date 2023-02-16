import { useState } from "react";
import "./createform.css"
import axios from 'axios';

const Create = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [horsePower, setHorsePower] = useState('');
  const [file, setFile] = useState({});

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
  })

  const handleFileChange = (file) => {
    if (!file) {
      setFile('');
      return;
    }

    fileToDataUri(file)
      .then(dataUri => {
        setFile(dataUri)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const car = { make, model, color, engineSize, horsePower };

    fetch('/api/car', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify({
        'createCarDTO': {
          'make': car.make,
          'model': car.model,
          'color': car.color,
          'engineSize': Number(car.engineSize),
          'horsePower': Number(car.horsePower),
        },
        // file,
      }),
    }).then(() => {
      console.log('addd')
    })
  }

  console.log({ file });

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
        <button>Save</button>
      </form>
    </div>
  );
}

export default Create;