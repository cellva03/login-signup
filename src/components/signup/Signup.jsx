import React from 'react';
import { useForm } from 'react-hook-form';
import { Form,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data)=>{
        console.log(data);
        const res = await fetch('http://localhost:5000/users');
        const userData = await res.json();
        console.log(userData);
    }
  return (
    <div>
        <Form className='container' onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center">Signup</h2>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" required
                // onChange={e=>setUsername(e.target.value)}
                {...register("firstName")}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" required
                // onChange={e=>setUsername(e.target.value)}
                {...register("lastName")}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" required
                // onChange={e=>setUsername(e.target.value)}
                {...register("userName",{ minLength: 6})}
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
            <div className="text-center" >

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <p >Already Have an Account..! <Link to ="/login">Login</Link></p>
            </div>
        </Form>

    </div>
  )
}

export default Signup;
// https://open.cruip.com/`