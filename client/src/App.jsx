import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';
import NavigationBar from './components/NavigationBar';
import ViewUser from './components/ViewUser';

function App() {

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/update-user/:id' element={<UpdateUser />} />
        <Route path='/view-user/:id' element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
