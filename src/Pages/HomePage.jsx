import { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import axios from 'axios';
import { Button, Col, Form, Row } from 'react-bootstrap';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=${page}&include_adult=false`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2JlZDMzZDIwNjFjNWUzYzdkODRiMzRjODYzY2M1ZiIsIm5iZiI6MTczNzk4NTMzNy42NjksInN1YiI6IjY3OTc4ZDM5M2Y3ZmNmNjdkMDhmNjFlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lg2MGOX1wHrfnwnx90PsNKRLWEv80G8K6RW4qCyABoo'
                }
            });
            setMovies(response.data.results);
            console.log(response.data);
            setTotalPages(response.data.total_pages);


        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [page])

    return <div className='d-flex flex-column align-items-center justify-content-center'>
        <h1>HomePage</h1>

        <Form >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>

        <div className='d-flex justify-content-between align-items-center col-8'>
            <button className='btn btn-outline-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>◀ Précédent​</button>
            <span>Page {page} sur {totalPages}</span>
            <button className='btn btn-outline-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant ▶​</button>
        </div>

        <div className='d-flex flex-wrap justify-content-around align-content-center gap-5 col-8'>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
        <div className='d-flex justify-content-between align-items-center col-8'>
            <button className='btn btn-outline-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>◀ Précédent​</button>
            <span>Page {page} sur {totalPages}</span>
            <button className='btn btn-outline-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant ▶​</button>
        </div>
    </div>;
}

export default HomePage;
