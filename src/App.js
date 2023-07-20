import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import Body from './Components/Body/Body'
import Footer from './Components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
        <Container fluid className="mainContainer">
          <Row>
            <Navigation />
          </Row>
          <Row className="body">
            <Body />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
  );
}

export default App;
