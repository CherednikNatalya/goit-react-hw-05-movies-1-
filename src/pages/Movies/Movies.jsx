import Searchbar from '../../components/Searchbar/Searchbar'
// import debounce from 'lodash/debounce';
import TrendingList from '../../components/TrendingList/TrendingList'
import {fetchSearchMovies} from '../../services/API'
import STATUS from '../../services/status'
import { useState, } from "react";

const Movies = () => {
    
    const [status, setStatus] =useState(STATUS.idle)
    
    const [movies, setMovies] = useState([]);
    
 
    const onSubmit = async e => {
      return await fetchSearchMovies(e).then(res => setMovies(res.results));
    };


//   useEffect (()=>{
//     const getMovie = async searchQuery => {
//         setStatus(STATUS.pending)
//         try {
//            const data =await fetchSearchMovies(searchQuery)
//            onResolve(data)         
//         } catch (error) {           
//             setStatus(STATUS.error); 
//         }
//     }
//     getMovie()
    
// }, [searchQuery])


// const onResolve = data => {
//   const movie = data.map(({ id, poster_path, original_title }) => ({
//       id,
//       img: poster_path,
//       title: original_title,
//   }));
//   setMovies(movie);
//   setStatus(STATUS.success);
// }


    
return(
  <>
   <Searchbar onSubmit={onSubmit}/>
   {status === STATUS.success && <TrendingList movies={movies}/>}
   </>
)
}


export default Movies