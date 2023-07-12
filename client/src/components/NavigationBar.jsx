import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' fixed='top'>
      <Container>
        <Navbar.Brand href='/'>CRUD App</Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link href='/create-user'>Add User</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;