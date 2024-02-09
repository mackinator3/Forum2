import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/container";

export default function NewsItems(props) {
    return (
        <Row>
            <Container className="">
                <Row className='NewsDate'>
                    <p className="text-center">
                        {props.date}
                    </p>
                </Row>
                <Row className='NewsItem'>
                    <p className="text-center">
                        {props.text}
                    </p>
                </Row>
            </Container>
        </Row>
    )
}