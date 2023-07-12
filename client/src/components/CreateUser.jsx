import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createUser', { name, email, phone })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <Form onSubmit={submitForm} className='bg-white rounded w-50 p-3 border border-dark'>
        <h1>Add User</h1>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Phone</Form.Label>
          <Form.Control type='number' onChange={(e) => setPhone(e.target.value)} placeholder='Age' required />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default CreateUser;