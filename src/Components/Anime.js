import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Anime() {
    const [stats, setStats] = useState({});
    const [charName, setCharName] = useState("");
    const [imgDisplay, setImgDisplay] = useState(false)
    //useEffect(() => function callApi(value) {
    //    fetch(`https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop`)
    //        .then(res => res.json())
    //        .then(data => setStats(data))
    //        .catch(error => console.error(error))
    //}, []); This was used in testing.

    {console.log(imgDisplay + "origin")}
    useEffect(() => {
        // Define an asynchronous function to fetch the data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched data:', data);
                    setStats(data.data);
                } else {
                    console.error('Failed to fetch data from the API');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        
    }, []); // The empty dependency array ensures this runs once when the component mounts

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
        const { value } = event.target
        setCharName(value)
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
                                    {console.log(imgDisplay)}
                                    <strong>{key} : </strong>
                                    {imgDisplay ? <Image src={value} action onClick={(e) => setImgDisplay(!imgDisplay)} alt="Anime" ></Image> : <Button className="Images" action onClick={(e) => setImgDisplay(!imgDisplay)}>Image</Button>}
                                </ListGroup.Item>
                            ) : (
                                <ListGroup.Item key={currentKey} className="Capital" action onClick={e => apiCall(value)}><strong>{key} : </strong>{anime[key]}</ListGroup.Item>
                            ) : (
                                key !== 'abbreviatedTitles' && key !== 'ratingFrequencies' && key !== 'id' && key !== 'createdAt' && key !== 'updatedAt' && key !== "nsfw" && key !== "meta" && key !== "relationships" && key !== "links" &&
                                <div key={currentKey}>
                                    {(typeof value !== 'object') ? (
                                        <ListGroup.Item className="Capital">
                                            <strong>{key}:</strong> {value}
                                        </ListGroup.Item>
                                    ) : (
                                        <ListGroup.Item className="Capital">
                                            <strong>{key}: </strong>
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
                <Form>
                    <Form.Control type="text" placeholder="Enter search" onChange={handleChange} />
                    <Form.Control type="button" value="Submit" onClick={apiCallButton} />
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