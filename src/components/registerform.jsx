import React, {
    useState,
} from "react";
import axios from 'axios';

import "./registerform.css"

const RegisterForm = (props) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, name, surname, email, password } = formValues;

        try {
            await axios.post("http://localhost:8080/api/users/registration", {
                username,
                name,
                surname,
                email,
                password
            });
            props.onFormSwitch('login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="cover" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>Username</label>
            <input name='username' onChange={handleChange} type="text" placeholder="username" />
            <label>Name</label>
            <input name='name' onChange={handleChange} type="text" placeholder="name" />
            <label>Surname</label>
            <input name='surname' onChange={handleChange} type="text" placeholder="surname" />
            <label>Email</label>
            <input name='email' onChange={handleChange} type="text" placeholder="email" />
            <label>Password</label>
            <input name='password' onChange={handleChange} type="password" placeholder="password" />

            <button onClick={() => props.onFormSwitch('login')}>I have an account</button>
            <button className="register-btn" type="submit" >SignIn</button>

        </form>
    )
}

export default RegisterForm;