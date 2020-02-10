import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import MyRouter from '../../route';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MyRouter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
