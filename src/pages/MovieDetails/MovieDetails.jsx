import STATUS from '../../services/status'
import { useState, useEffect, Suspense} from 'react'
import {fetchMovieDetailsById} from '../../services/API'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import MovieCart from '../../components/MovieCart/MovieCart'

import { useParams,  NavLink,Outlet,  Link, useLocation  } from 'react-router-dom'

const MovieDetails =() => {
    const [movie, setMovie] = useState([])
    const [status, setStatus] = useState(STATUS.idle);
    const {movieId} =useParams()
   
    const location = useLocation()

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

    
    return(
        <Section>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && 
        (<main>
        <Link to={location.state?.from ?? '/'} className="mb-4">
          Go Back
        </Link>
     
        <MovieCart movie={movie}/>
        
         <ul>
         <li>
           <NavLink to="cast" state={{ from: location.state?.from }}>Cast</NavLink>
         </li>
         <li>
           <NavLink to="reviews" state={{ from: location.state?.from }}>Reviews</NavLink>
         </li>
       </ul>
       

       <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      
       </main>)}     
        </Section>
    )
}

export default MovieDetails