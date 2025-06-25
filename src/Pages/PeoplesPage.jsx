import axios from "axios";
import PeopleCard from "../Components/PeopleCard";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';

const PeoplesPage = () => {

const[peoples, SetPeoples] = useState([]);
const [search, setSearch] = useState("");
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState();

    const fetchPeoples= async () => {
      try {
      if (search ===("")) {
            const response = await axios.get("https://api.themoviedb.org/3/person/popular", {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q'
                }
            });

            console.log(response);
            SetPeoples(response.data.results);
          } else {
                       const response = await axios.get(`https://api.themoviedb.org/3/search/person?language=fr-FR&query=${search}&page=${page}&include_adult=false`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q'
                }
            });

            console.log(response);
            SetPeoples(response.data.results);

          }

          
            

        } catch (error) {
            console.error("Error fetching movies", error);
        }
    }
   
    useEffect(() => {
    fetchPeoples();
    }, [search])

        const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    }
    
    return <div className="d-flex flex-column align-items-center justify-content-center">
    <h1>Peoples Page</h1>
        <input
        type='texte'
        className='barre form-control col-8'
        placeholder='Rechercher un acteur'
        value={search}
        onChange={handleSearchChange}
    />
            <div className='d-flex justify-content-between align-items-center col-8'>
            <button className='btn btn-outline-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>◀ Précédent​</button>
            <span className='pagination'>Page {page} sur {totalPages}</span>
            <button className='btn btn-outline-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant ▶​</button>
        </div>
    <div className="d-flex flex-wrap justify-content-center gap-5 col-8">
    {peoples.map((people) => {
        return < PeopleCard key={people.id} people={people}/>
    })}
    </div>
            <div className='d-flex justify-content-between align-items-center col-8'>
            <button className='btn btn-outline-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>◀ Précédent​</button>
            <span className='pagination'>Page {page} sur {totalPages}</span>
            <button className='btn btn-outline-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant ▶​</button>
        </div>
    </div>;
}
 
export default PeoplesPage;