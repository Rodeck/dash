import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Main from './Main';
import { Container, Nav, Navbar } from 'react-bootstrap';

const appendScript = (scriptToAppend: string) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}

function App() {

  const [script, setScript] = useState(appendScript('env-config.js'))

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/expenses">Expenses</Nav.Link>
            <Nav.Link as={Link} to="/trello">Trello</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Main />
    </div>
  );
}

export default App;
