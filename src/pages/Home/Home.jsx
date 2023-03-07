import {fetchTrendingMovies} from '../../services/API'
import STATUS from '../../services/status'
import {Title} from '../Home/Home.styled'
import Loader from '../../components/Loader/Loader'
import TrendingList  from '../../components/TrendingList/TrendingList'
import { useState, useEffect } from 'react'


const Home =() => {
const [movies, setMovies] = useState([])
const [status, setStatus] = useState(STATUS.idle);

useEffect (()=>{
    const getMovies = async () => {
        setStatus(STATUS.pending)
        try {
           const data =await fetchTrendingMovies()
           onResolve(data) 
        } catch (error) {
            console.log(error);
            setStatus(STATUS.error); 
        }
    }
    getMovies()
}, [])

const onResolve = data => {
    const movie = data.map(({ id, poster_path, original_title }) => ({
        id,
        img: poster_path,
        title: original_title,
    }));
    setMovies(movie);
    setStatus(STATUS.success);
}



    return(
<>
<Title>Trending today</Title>
{status === STATUS.pending && <Loader />}
{status === STATUS.success && <TrendingList movies={movies}/>}

</>
)
}

export default Home