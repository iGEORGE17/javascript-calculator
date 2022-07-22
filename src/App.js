import React from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <section>
      <Calculator />
      <Container className="author">
          <p>Designed and Coded By <br />
          <a href="https://github.com/iGEORGE17" target="_blank" rel="noreferrer">
            George Igboanugo
          </a></p>
        </Container>
    </section>
  );
}

export default App;
