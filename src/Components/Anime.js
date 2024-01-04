import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ImgButton from './ImgButton'
import Button from 'react-bootstrap/Button';

export default function Anime() {
    const [stats, setStats] = useState({});
    const [charName, setCharName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Event: Form Submit');
    };

    //This function calls the api, using the url provided by the links in the data.
    function apiCall(anime) {
        fetch(`${anime}`)
            .then(res => res.json())
            .then(data => setStats(data.data))
            .catch(error => console.error(error))
    }

    //This function is used to search with the input box I have provided.
    function apiCallButton() {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${charName}`)
            .then(res => res.json())
            .then(data => setStats(data.data))
            .catch(error => console.error(error))
    }

    //This is used to update state for previous apiCallButton function submission.
    function handleChange(event) {
        const { value } = event.target;
        setCharName(value);
    }

    //Recusrively break up the data objects.
    function recursiveObjects(anime, parentKey = '') {
        if (typeof anime === 'object' && anime !== null) {
            return Object.entries(anime).map(([key, value]) => {
                const currentKey = `${parentKey}-${key}`;
    
                if (!isNaN(parseInt(key, 10))) {
                    // If the key is a numerical index, just use the parent key
                    return (
                        <div key={currentKey}>
                            {recursiveObjects(value, parentKey)}
                        </div>
                    );
                }
    
                return (
                    (typeof value === 'string' && value[0] === "h" && value[1] === "t" && value[2] === "t") ?
                        (typeof value === 'string' && value[8] === "m" && value[9] === "e" && value[10] === "d" && key !== "meta") ?
                            (
                                <ListGroup.Item key={currentKey} className="Capital">
                                    <strong>{key} : </strong>
                                    <ImgButton value={ value }></ImgButton>
                                </ListGroup.Item>
                            ) : (
                                <ListGroup.Item key={currentKey} className="Capital" action onClick={(e) => apiCall(value)}><strong>{key} :</strong>{anime[key]}</ListGroup.Item>
                            ) : (
                            key !== 'abbreviatedTitles' && key !== 'coverImageTopOffset' && key !== 'ratingRank' && key !== 'popularityRank' && key !== 'userCount' && key !== 'favoritesCount'&& key !== 'ratingFrequencies' && key !== 'description' && key !== 'id' && key !== 'createdAt' && key !== 'updatedAt' && key !== "nsfw" && key !== "meta" && key !== "relationships" && key !== "links" &&
                                <div key={currentKey}>
                                    {(typeof value !== 'object') ? (
                                        (key === 'type') ? (
                                            <ListGroup.Item className="Capital type">
                                                <strong>{key} : </strong> {value}
                                            </ListGroup.Item>
                                        ) : (
                                        <ListGroup.Item className="Capital">
                                            <strong>{key} : </strong> {value}
                                        </ListGroup.Item> )
                                    ) : (
                                        <ListGroup.Item className="Capital">
                                            <strong>{key} : </strong>
                                            {recursiveObjects(value, currentKey)}
                                        </ListGroup.Item>
                                    )}
                                </div>)
                );
            });
        } else {
            return <ListGroup.Item key={`${parentKey}-error`}><strong> Error finding data </strong></ListGroup.Item>;
        }
    }

    //Used to render the stats object, calling the recursive function.
    function renderStats(stats) {
        if (!stats) {
            return <p>Loading data...</p>;
        }

        return (
            <ListGroup>
                {recursiveObjects(stats)}       
            </ListGroup>
                );

    }

    return (
        <Container fluid>
            <Row>
                <Navigation />
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Control type="text" placeholder="Enter search" onChange={handleChange}/>
                    <Button value="Submit" onClick={apiCallButton}> Submit </Button>
                </Form>
            </Row>
            <Row>
                <ListGroup>
                        {renderStats(stats)}         
                </ListGroup>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}