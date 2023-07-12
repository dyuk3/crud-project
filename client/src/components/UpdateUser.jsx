import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const UpdateUser = () => {

  const { id } = useParams();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
      })
      .catch(err => console.log(err));
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, phone })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));

  };



  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <Form onSubmit={updateUser} className='bg-white rounded w-50 p-3 border border-dark'>
        <h1>Update User</h1>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter your name' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Phone</Form.Label>
          <Form.Control type='number' onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Age' required />
        </Form.Group>
        <Button type='submit' variant='success'>Update</Button>
      </Form>
    </div>
  );
};

export default UpdateUser;