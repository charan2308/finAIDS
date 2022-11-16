import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from './logo3.svg'

import './App.css';


const App = () => (
<div>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            finAIDS
          </Navbar.Brand>
        </Container>
      </Navbar>
<div class="container py-4">
    <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">finAIDS</h1>
      <p class="col-md-8 fs-4">Your all in one Financial Advisior</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
    </div>
</div>
</div>
);

export default App;