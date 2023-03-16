import STATUS from '../../services/status'
import { useState, useEffect, Suspense} from 'react'
import {fetchMovieDetailsById} from '../../services/API'
import Section from '../../components/Section/Section'
import Loader from '../../components/Loader/Loader'
import MovieCart from '../../components/MovieCart/MovieCart'
import {BtnList, } from './MovieDetails.styled'
import { useParams, Outlet,  Link, useLocation  } from 'react-router-dom'

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
          <BtnList>
        <Link to={location.state?.from ?? '/'} className="link"  >
          Go Back
        </Link>
        </BtnList>
        <MovieCart movie={movie}/>
        <BtnList>
         <ul>
         <li>
           <Link to="cast" state={{ from: location.state?.from }} className="link">Cast</Link>
         </li>
         <li>
           <Link to="reviews" state={{ from: location.state?.from }} className="link">Reviews</Link>
         </li>
       </ul>
       </BtnList>

       <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      
       </main>)}     
        </Section>
    )
}

export default MovieDetails