import STATUS from '../../services/status'
import { useState, useEffect, } from 'react'
import {fetchMovieDetailsById} from '../../services/API'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import MovieCart from '../../components/MovieCart/MovieCart'
import Button from '../../components/Button/Button'
import { useParams,  NavLink,Outlet, useNavigate } from 'react-router-dom'

const MovieDetails =() => {
    const [movie, setMovie] = useState([])
    const [status, setStatus] = useState(STATUS.idle);
    const {movieId} =useParams()
    const navigate =useNavigate()

    useEffect (()=>{
        const getMovie = async query => {
            setStatus(STATUS.pending)
            try {
               const data =await fetchMovieDetailsById(movieId)
               onResolve(data) 
            
            } catch (error) {
               
                setStatus(STATUS.error); 
            }
        }
        
        getMovie()
        
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
        setMovie(dataMovie);
        setStatus(STATUS.success);
    }

    const onClick = () =>{
        navigate('/')
    }
    // onClick={() => navigate(location?.state?.from)}
    return(
        <Section>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && 
        (<>
        <Button onClick={onClick}/>
        <MovieCart movie={movie}/>
         <ul>
         <li>
           <NavLink to="cast">Cast</NavLink>
         </li>
         <li>
           <NavLink to="reviews">Reviews</NavLink>
         </li>
         
       </ul>
       <Outlet />
       </>)}
        
       

        </Section>
    )
}
export default MovieDetails