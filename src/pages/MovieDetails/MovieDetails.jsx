import STATUS from '../../services/status'
import { useState, useEffect } from 'react'
import {fetchMovieDetailsById} from '../../services/API'
import Section from ''

const MovieDetails =() => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(STATUS.idle);
    
    useEffect (()=>{},[])


    return(
        <Section>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && <TrendingList movies={movies}/>}
        
        </Section>
    )
}
export default MovieDetails