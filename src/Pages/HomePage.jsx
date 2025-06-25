import { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import axios from 'axios';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/homePage.css'

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [search, setSearch] = useState("");

    const fetchMovies = async () => {
        try {
            if (search ==="") {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=${page}&include_adult=false`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2JlZDMzZDIwNjFjNWUzYzdkODRiMzRjODYzY2M1ZiIsIm5iZiI6MTczNzk4NTMzNy42NjksInN1YiI6IjY3OTc4ZDM5M2Y3ZmNmNjdkMDhmNjFlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lg2MGOX1wHrfnwnx90PsNKRLWEv80G8K6RW4qCyABoo'
                }
            });
            setMovies(response.data.results);
            console.log(response.data);
            setTotalPages(response.data.total_pages);
        } else {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=fr-FR&query=${search}&page=${page}&include_adult=false`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2JlZDMzZDIwNjFjNWUzYzdkODRiMzRjODYzY2M1ZiIsIm5iZiI6MTczNzk4NTMzNy42NjksInN1YiI6IjY3OTc4ZDM5M2Y3ZmNmNjdkMDhmNjFlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lg2MGOX1wHrfnwnx90PsNKRLWEv80G8K6RW4qCyABoo'
                } 
            });
            setMovies(response.data.results);
            console.log(response.data);
            setTotalPages(response.data.total_pages);
        }

        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [page, search]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    }

    return <div className='d-flex flex-column align-items-center justify-content-center'>
        <h1>HomePage</h1>

    <input
        type='texte'
        className='barre form-control col-8'
        placeholder='Rechercher un film'
        value={search}
        onChange={handleSearchChange}
    />

        <div className='d-flex justify-content-between align-items-center col-8'>
            <button className='btn btn-outline-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>◀ Précédent​</button>
            <span className='pagination'>Page {page} sur {totalPages}</span>
            <button className='btn btn-outline-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant ▶​</button>
        </div>

        <div className='d-flex flex-wrap justify-content-around align-content-center gap-5 col-8'>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
        <div className='d-flex justify-content-between align-items-center col-8'>
            <button className='btn btn-outline-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>◀ Précédent​</button>
            <span className='pagination'>Page {page} sur {totalPages}</span>
            <button className='btn btn-outline-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant ▶​</button>
        </div>
    </div>;
}

export default HomePage;
