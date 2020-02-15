import React, { useContext, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import MyRouter from '../../route';
import Theme, { themes } from '../../contexts/Theme';

interface AppComponent {
  (): JSX.Element;
}

const App: AppComponent = (): JSX.Element => {
  const { theme } = useContext(Theme);
  const [nowTheme, setNowTheme] = useState(theme);

  const changeTheme = (): void => {
    if (Object.is(nowTheme, themes.dark)) {
      setNowTheme(themes.light);
    } else {
      setNowTheme(themes.dark);
    }
  };

  return (
    <Theme.Provider value={{ theme: nowTheme, changeTheme }}>
      <Container fluid>
        <Row>
          <Col>
            <MyRouter />
          </Col>
        </Row>
      </Container>
    </Theme.Provider>
  );
};

export default App;
