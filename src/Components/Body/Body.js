import Container from "react-bootstrap/container";
import NewsData from '../newsData'
import NewsItem from './NewsItem'

export default function Body() {

    const NewsItems = NewsData.map(item => {
        return (
            <NewsItem
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <Container>
            {NewsItems}
        </Container>
    )
}