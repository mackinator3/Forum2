import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Anime() {
    return (
        <Container fluid>
            <Row>
                <Navigation />
            </Row>
            <Row>
                Anime Site
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}