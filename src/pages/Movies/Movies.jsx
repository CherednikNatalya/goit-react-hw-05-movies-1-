
import {fetchSearchMovies} from '../../services/API'
import STATUS from '../../services/status'
import Loader from '../../components/Loader/Loader'
import { useState} from "react";
import {Outlet } from 'react-router-dom';
import {Form, Input, Btn, List, TitleMovie, Item, Section, Title} from './Movies.styled'
import Searchbar from '../../components/Searchbar/Searchbar'
import MovieList from '../../components/MovieList/MovieList'


const Movies = () => {

    const [status, setStatus] =useState(STATUS.idle)
    const [movies, setMovies] = useState([])
   
   
    const handleSubmit= async e => {
      return await fetchSearchMovies(e)
      .then(res => setMovies(res.results));
    }; 
   
return(
<>
<Searchbar/>
<Title>Trending today</Title>
{status === STATUS.pending && <Loader />}
{status === STATUS.success && <MovieList movies={movies} /> }

<Outlet />
</>
)

}


export default Movies