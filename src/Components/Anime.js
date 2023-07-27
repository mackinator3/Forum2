import Navigation from './Navigation';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';


export default function Anime() {
    useEffect(() => {
        async function AnimeList() {
            const url = 'https://animenewsnetwork.p.rapidapi.com/reports.xml?id=155&nskip=10&nlist=10';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '75183b4bdbmshdcabb2050efffddp1891c7jsnae7889740054',
                    'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        const data = AnimeList();
        console.log(data)
    }, []
    )

    return (
        <Container fluid>
            <Row>
                <Navigation />
            </Row>
            <Row>
                Test
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}