import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

export default function StarWars() {
    const [Listing, setListing] = useState({});
    const [Search, setSearch] = useState(false);
    const [CharName, setCharName] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(res => res.json())
            .then(data => setListing(data.results))
    }, [])

    function handleChange(event) {
        const { value } = event.target
        setCharName(value)
        console.log(CharName + " handlechange")
    }

    useEffect(function search() {
        for (let i = 0; i < Listing.length; i++) {
            if (Listing[i].name === CharName) {
                setSearch(true);
                return
            }
            else {
                setSearch(false);
            }
        }
    }, [CharName])

	return (
        <Container fluid>
            <Row>
                <Navigation />
            </Row>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formCharName">
                        <Form.Label>Character Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={handleChange} />
                    </Form.Group>
                </Form>
                <Row>{Search ? "yes" : "Nope"}</Row>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
	)
}