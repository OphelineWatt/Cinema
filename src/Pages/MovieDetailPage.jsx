import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const MovieDetailPage = () => {
    const [movieDetail, setMovieDetail] = useState([]);
    const {id} =useParams();

    const fetchMovies = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/"+id+"?language=fr-FR",{
             headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q'
                }
            });
                setMovieDetail(response.data);
                console.log(response.data)
                
        } catch (error) {
            console.error('Error fetching movie details', error)
        }
    }
    useEffect(()=>{
        fetchMovies();
    }, []);
    return(
      <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>Movie Detail Page</h1>
            <div className='card' style={{ width: '72rem' }}>
                <img src={"https://image.tmdb.org/t/p/original" + movieDetail.poster_path} className="card-img-top" alt={movieDetail.title} />
                <div className='card-body'>
                    <h5 className='card-title'>{movieDetail.title}</h5>
                    <p className='card-text'>{movieDetail.overview}</p>
                    <p className='card-text'>Release Date: {movieDetail.release_date}</p>
                    <p className='card-text'>Rating: {movieDetail.vote_average}</p>
                </div>
            </div>
        </div>
    );
}
 
export default MovieDetailPage;