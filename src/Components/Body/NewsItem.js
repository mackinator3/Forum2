import Row from 'react-bootstrap/Row';

export default function NewsItems(props) {
    return (
        <>
        <Row className='NewsDate'>{props.date}</Row>
        <Row className='NewsItem'>{props.text}</Row>
        </>
    )
}