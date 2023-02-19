import { useState } from 'react';
import './App.css';
import LoginForm from '../components/loginform';
import RegisterForm from '../components/registerform';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from "../Navbar";
import Edit from './Edit';
import Create from '../components/createform';
import CarDetails from "../components/detailsform";
import { useSelector } from 'react-redux'

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const token = useSelector((state) => state.token.token)

  const toogleForm = (form) => {
    setCurrentForm(form)
  }

  return (
    <Router>
      <Switch>
        {token ? (
          <>
            <Route path="/home">
              <Navbar />
              <Home />
            </Route>
            <Route path="/favorite">
              <Navbar />
              <Home />
            </Route>
            <Route path="/create">
              <Navbar />
              <Create />
            </Route>
            <Route path="/car/:id">
              <Navbar />
              <CarDetails />
            </Route>
            <Route path="/edit/:id">
              <Navbar />
              <Edit />
            </Route>
          </>
        ) : null}
        <Route path='/'>
          <div className="page">
            {currentForm === 'login' ? <LoginForm onFormSwitch={toogleForm} /> : <RegisterForm onFormSwitch={toogleForm} />}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
