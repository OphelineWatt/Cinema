import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const PeopleDetailPage = () => {
    const [peopleDetail, setPeopleDetail] = useState([]);
    const {id} =useParams();

    const fetchPeoples = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/person/"+id+"?language=fr-FR",{
             headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q'
                }
            });
                setPeopleDetail(response.data);
                console.log(response.data)
                
        } catch (error) {
            console.error('Error fetching movie details', error)
        }
    }
    useEffect(()=>{
        fetchPeoples();
    }, []);
    return(
      <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>Movie Detail Page</h1>
            <div className='card' style={{ width: '30rem' }}>
                <img src={"https://image.tmdb.org/t/p/original" + peopleDetail.profile_path} className="card-img-top" alt={peopleDetail.title} />
                <div className='card-body'>
                    <h5 className='card-title'>{peopleDetail.name}</h5>
                    <p className='card-text'>{peopleDetail.birthday}</p>
                    <p className='card-text'>Biography: {peopleDetail.biography}</p>
                    <p className='card-text'>Death day: {peopleDetail.deathday}</p>
                </div>
            </div>
        </div>
    );
}

 
export default PeopleDetailPage;