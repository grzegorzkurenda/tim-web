import { useState } from 'react';
import './App.css';
import LoginForm from './components/loginform';
import RegisterForm from './components/registerform';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Navbar from "./Navbar";


function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toogleForm = (form) =>{
    setCurrentForm(form)
  }

  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Navbar/>
            <Home/>
          </Route>
          <Route path="/favorite">
            <Navbar/>
            <Home/>
          </Route>
        <Route path='/'>
          <div className="page">
           {currentForm ==='login' ? <LoginForm onFormSwitch={toogleForm}/>: <RegisterForm onFormSwitch={toogleForm} />}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
