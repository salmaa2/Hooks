import ReactStars from 'react-stars'
import {Card } from 'react-bootstrap'
function MovieCard({el}) {
    return (
        <div>

           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={el.posterUrl} />
            <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
                {el.description}
            </Card.Text>
            </Card.Body>
            <ReactStars
                count={5}
                onChange={el.rate}
                size={24}
                color2={'#ffd700'}
                edit={false}  />
            <Card.Body>
            <Card.Link href={el.trailer}>Serie trailer</Card.Link>
             
            </Card.Body>
            </Card>
        </div>
    )
    
}
export default MovieCard 