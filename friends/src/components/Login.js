import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const history = useHistory();

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            // console.log(res.data.payload);
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            history.push('/friends');
        })
        .catch(err => {
            setError(err.response.data.error);
        })
    };

    return (
        <div>
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <input 
                type='text'
                name='username'
                value={credentials.username}
                placeholder='Username'
                onChange={handleChange}/>
                </div>

                <div>
                <input 
                type='password'
                name='password'
                value={credentials.password}
                placeholder='Password'
                onChange={handleChange}/>
                </div>

                <StyledError>{error}</StyledError>
                
                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;

const StyledError = styled.div`
    color: red;
`;