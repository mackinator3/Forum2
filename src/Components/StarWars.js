import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useCallback } from 'react';

export default function StarWars() {

    const [currentIndex, setCurrentIndex] = useState("people");
    const [listing, setListing] = useState([]);
    const [charName, setCharName] = useState("");
    const [fixedOrNot, setFixedOrNot] = useState(false);

    const getSearch = useCallback((event) => {
        const{value} = event.target
        setCurrentIndex(value);
    }, [])
    
    function apiCall() {
            fetch(`https://swapi.dev/api/${currentIndex}/?search=${charName}`)
                .then(res => res.json())
                .then(data => setListing(data.results))
            .catch(error => console.error(error))
        }

    function callApi(value) {
        fetch(`${value}`)
            .then(res => res.json())
            .then(data => setListing([data]))
            //.then(data => console.log(data))
            //.then(data => Object.entries(data))
            //.then(data => console.log(data))
            //.then(data => setListing(data.name + 'data'))
            //.then(console.log("test"))
            //.catch(error => console.error(error))
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Event: Form Submit');
        setFixedOrNot(!fixedOrNot);
    };

    function handleChange(event) {
        const { value } = event.target
        setCharName(value)
    }

	return (
        <Container fluid>
            <Row>
                <Navigation />
            </Row>
            <Row>
            <button onClick={getSearch} name="People-button" value="people">
                People Search
            </button>
            <button onClick={getSearch} name="Planet-button" value="planets">
                Planet Search
            </button>            
            <button onClick={getSearch} name="Films-button" value="films">
                Film Search
            </button>            
            <button onClick={getSearch} name="Species-button" value="species">
                Species Search
            </button>            
            <button onClick={getSearch} name="Vehicles-button" value="vehicles">
                Vehicles Search
            </button>            
            <button onClick={getSearch} name="Starships-button" value="starships">
                Starship Search
            </button>
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Label className="Capital">{currentIndex}</Form.Label>
                    <Form.Control type="text" placeholder="Enter search" onChange={handleChange}/>
                    <Form.Control type="button" value="Submit" onClick={apiCall}/>
                </Form>
            </Row>
            <Row>
                <ListGroup className="swList Capital">
                {listing.map((item, index) => (
                    Object.entries(item).map(([key, value]) => (
                        (
                            typeof value === 'string' && value[0] === "h" && value[1] === "t" && value[2] === "t") ? (
                                <ListGroup.Item key={`${index}-${key}`} action onClick={e => callApi(value)} ><strong>{key} : </strong>{item[key]}</ListGroup.Item>
                        ) : (
                            typeof value === 'string' && value !== "") ? (
                                <ListGroup.Item key={`${index}-${key}`}><strong>{key} : </strong>{item[key]}</ListGroup.Item>
                            ) : (
                                Array.isArray(value) && value.length > 0 && (
                                    <ListGroup.Item key={`${index}-${key}`}>
                                        <strong>{key}:</strong>
                                        <ul>
                                            {value.map((item, i) => (
                                                <ListGroup.Item key={i} action onClick={e => callApi(value[i])}>{item}</ListGroup.Item>
                                            ))}
                                        </ul>
                                    </ListGroup.Item>
                                )
                            )
                        ))
                    ))}
                </ListGroup>
            </Row>
            <Row className={fixedOrNot ? "fixed-bottom" : ""}>
                <Footer />
            </Row>
        </Container>
	)
}