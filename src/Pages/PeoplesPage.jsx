import axios from "axios";
import PeopleCard from "../Components/PeopleCard";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';

const PeoplesPage = () => {

const[peoples, SetPeoples] = useState([]);

    const fetchPeoples= async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/person/popular", {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q'
                }
            });

            console.log(response);
            

            SetPeoples(response.data.results);

          
            

        } catch (error) {
            console.error("Error fetching movies", error);
        }
    }
   
    useEffect(() => {
    fetchPeoples();
    }, [])
    
    return <div className="d-flex flex-column align-items-center justify-content-center">
    <h1>Peoples Page</h1>
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
    <div className="d-flex flex-wrap justify-content-center gap-5 col-8">
    {peoples.map((people) => {
        return < PeopleCard key={people.id} people={people}/>
    })}
    </div>
    </div>;
}
 
export default PeoplesPage;