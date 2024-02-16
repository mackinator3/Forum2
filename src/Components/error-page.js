import { useRouteError } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container fluid id="error-page">
            <Row>
                <Navigation />
            </Row>
            <Row>
                <h1>Oops!</h1>
                <p>Sorry, this is a test of the error page!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </Row>
            <Row>
                <Footer className="fixed-bottom"/>
            </Row>
        </Container>
    );
}