import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PeoplesPage from './Pages/PeoplesPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MovieDetailPage from './Pages/MovieDetailPage';
import PeopleDetailPage from './Pages/PeopleDetailPage';

function App() {


  return (
    <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/peoples' element={<PeoplesPage/>}  />
    <Route path= '/details/:id' element={<MovieDetailPage/>} />
    <Route path= '/Peoples/details/:id' element={<PeopleDetailPage/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>

    </>
  )
}

export default App
