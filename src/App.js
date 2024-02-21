import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import Body from './Components/Body/Body'
import Footer from './Components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
    return (
        <Container fluid class="mainContainer">
          <Row className="mb-3">
                <Navigation />
          </Row>
          <Row>
                <Body>
                </Body>
          </Row>
          <Row className="fixed-bottom">
            <Footer />
          </Row>
        </Container>
  );
}

export default App;
