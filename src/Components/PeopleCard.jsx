import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PeopleCard = ({people}) => {
    return <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+people.profile_path} />
      <Card.Body>
        <Card.Title>{people.name}</Card.Title>
        <Card.Text>
        {people.known_for.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>
        })}
        </Card.Text>
              <Link to={`details/${people.id}`}>
        <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
    </>;
}
 
export default PeopleCard;