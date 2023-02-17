import React, {
    useState,
} from "react";
import axios from 'axios';
import "./loginform.css"
import { useSelector, useDispatch } from 'react-redux'
import { save } from '../tokenSlice'
import { useHistory } from "react-router-dom";


const LoginForm = (props) => {
    const [formValues, setFormValues] = useState({});
    const token = useSelector((state) => state.token.value)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { userName, password } = formValues;

        try {
            const response = await axios.post("http://localhost:8080/api/authentication", {
                userName,
                password,
            });

            // console.log(response);
            const { token } = response.data;
            window.localStorage.setItem('token', token);
            dispatch(save(token))
            // console.log(window.localStorage)
            history.push('/home');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="cover" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>{token}</div>
            <label>Username</label>
            <input name='userName' onChange={handleChange} type="text" placeholder="username" />
            <label>Password</label>
            <input name='password' onChange={handleChange} type="password" placeholder="password" />

            <button onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
            <button className="login-btn" type="submit" >Login</button>

        </form>
    )
}

export default LoginForm;
