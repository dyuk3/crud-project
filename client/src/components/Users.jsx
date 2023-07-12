import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';

const Users = () => {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);


  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(result => {
        console.log(result);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };


  return (
    <div className='d-flex vh-100  justify-content-center align-items-center '>
      <div className="w-50 bg-white rounded p-3 border border-dark" >
        {/* <div className='text-center' >
          <Link to={'/create-user'} className='btn btn-primary my-2' >Add user</Link>
        </div> */}
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <Link className='btn btn-primary me-2' to={`/view-user/${user._id}`}>View</Link>
                    <Link className='btn btn-success me-2' to={`/update-user/${user._id}`}>Edit</Link>
                    <Button onClick={(e) => deleteUser(user._id)} variant='danger'> Delete</Button>
                  </td>
                </tr>;

              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;