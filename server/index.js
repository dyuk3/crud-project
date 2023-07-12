const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud');

//to get all users
app.get('/', (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

//get user by id
app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

//update the user by id
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, phone: req.body.phone }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//delete the user by id

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//to create user
app.post('/createUser', (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//server port
app.listen(3001, () => {
  console.log('Server is running!');
});
