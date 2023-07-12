import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewUser = () => {

  const { id } = useParams();

  const [userID, setUserID] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();


  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        console.log(result);
        setUserID(result.data._id);
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='bg-white rounded w-50 p-3 border border-dark'>
        <h2>User Details</h2>
        {/*<p>ID: </p>
        <p>Name: </p>
        <p>Email: </p>
        <p>Phone: </p> */}
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userID}</td>
              <td>{name}</td>
              <td>{email} </td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;