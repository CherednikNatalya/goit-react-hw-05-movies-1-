import STATUS from '../../services/status'
import { useState, useEffect, } from 'react'
import {fetchMovieDetailsById} from '../../services/API'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import MovieCart from '../../components/MovieCart/MovieCart'
import { useParams,  NavLink,Outlet } from 'react-router-dom'

const MovieDetails =() => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(STATUS.idle);
    const {movieId} =useParams()
    

    useEffect (()=>{
        const getMovies = async query => {
            setStatus(STATUS.pending)
            try {
               const data =await fetchMovieDetailsById(query)
               onResolve(data) 
            } catch (error) {
                console.log(error);
                setStatus(STATUS.error); 
            }
        }
        getMovies()
    }, [movieId])
    
    const onResolve = data => {
        const dataMovie = {
            img: data.poster_path,
            title: data.original_title,
            releaseDate: new Date(data.release_date).getFullYear(),
            overview: data.overview, 
            genres: data.genres.map(item => item.name + ', ').join(' ').slice(0, -2),
            voteAverage: (data.vote_average * 10).toFixed(0),
        };
        setMovies(dataMovie);
        setStatus(STATUS.success);
    }
    
    return(
        <Section>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && <MovieCart movies={movies}/>}
        
        <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        
      </ul>
      <Outlet />

        </Section>
    )
}
export default MovieDetails