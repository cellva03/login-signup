import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './login.css';
import {Link} from 'react-router-dom'
// import { useState } from 'react';
// import getUser from '../../services/userServices.js';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [username,setUsername] = useState('');
    // const [password,setPassword] = useState('');
    // console.log(username,password);
    // console.log(watch("email"),watch("password"));

    const onSubmit = async(data)=>{
        console.log(data);
        const res = await fetch('http://localhost:5000/users');
        const userData = await res.json();
        // console.log(userData);// For each

        if (data.username === userData[0].username){
            alert('You are Logged In.....');
        }
        else{
            alert ('You are not a Authorized user...')
        }
    }
  return (
    <div>
        <Form className='container' onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" required
                // onChange={e=>setUsername(e.target.value)}
                {...register("username",{ minLength: 6})}
                />
                {errors.username && <span>The Email should be minimum length of 6</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                // onChange={e=>setPassword(e.target.value)}  regex  pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                {...register("password",{minLength:8})}
                />
                {errors.password && <span>The password should be minimum length of 8</span>}
            </Form.Group>
            <div  className="text-center">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>No account? <Link to="/signup">Create one!</Link></p>
            </div>
        </Form>
    </div>
  )
}

export default Login