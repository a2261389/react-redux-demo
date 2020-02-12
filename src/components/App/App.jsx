import React, { useContext, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import MyRouter from '../../route';
import Theme from '../../contexts/Theme';

function App() {
  const { dark, light } = useContext(Theme);
  const [nowTheme, setNowTheme] = useState(dark);

  const changeTheme = (theme) => {
    if (Object.is(theme, dark)) {
      setNowTheme(light);
    } else {
      setNowTheme(dark);
    }
  };

  return (
    <Theme.Provider value={{ nowTheme, changeTheme }}>
      <Container fluid>
        <Row>
          <Col>
            <MyRouter />
          </Col>
        </Row>
      </Container>
    </Theme.Provider>
  );
}

export default App;
