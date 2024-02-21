import Container from "react-bootstrap/container";
import news from '../newsData'
import NewsItem from './NewsItem'
import Row from 'react-bootstrap/Row';


export default function Body() {

    const NewsItems = news.map(item => {
        if (item.id > news.length - 3)
            return (
                <NewsItem
                    key={item.id}
                    {...item}
                />
            )
        else {
            return null;
        }
    })

    return (
        <Container className="py-5">
                {NewsItems}
        </Container>
    )
}