import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    return <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className='text-truncate-bis'>
         {movie.release_date} - {movie.overview}
        </Card.Text>
        <Link to={`details/${movie.id}`}>
        <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
    </>;
}
 
export default MovieCard;