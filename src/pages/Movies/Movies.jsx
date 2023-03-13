import Searchbar from '../../components/Searchbar/Searchbar'
// import debounce from 'lodash/debounce';
import Notiflix from 'notiflix';
import TrendingList from '../../components/TrendingList/TrendingList'
import {fetchSearchMovies} from '../../services/API'
import STATUS from '../../services/status'
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';
import {Form, Input, Btn} from './Movies.styled'

const Movies = () => {
  
  
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] =useState(STATUS.idle)
    const [movies, setMovies] = useState([]);
    const searchName = searchParams.get('query');
    const location = useLocation();
 
    // const onSubmit = async e => {
    //   return await fetchSearchMovies(e)
    //   .then(res => setMovies(res.results));
    // };
 const handleSubmit = evt =>{
  evt.preventDefault();
   const {value} =evt.target.elements.search
    if (!value.length) {
      Notiflix.Notify.warning('Enter something in the searchbar');
      return;
    }
    setMovies ([])
    setSearchParams({ query: value });
    
}
 

  useEffect (()=>{
    if (!searchName) return;
		if (searchName === '') return;
    const getMovie = async searchQuery => {
        setStatus(STATUS.pending)
        try {
           const data =await fetchSearchMovies(searchQuery)
           onResolve(data)         
        } catch (error) {           
            setStatus(STATUS.error); 
        }
    }
    getMovie(searchQuery)
    
}, [searchName])


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

<Form onSubmit={handleSubmit}>
    
 <Input
       name='search'
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search"
        // value={query}
        // onChange={onChangeHandler}
      />
      <Btn type="submit">Search</Btn>
    </Form>
  


   {/* <Searchbar onSubmit={onSubmit}/> */}
   {status === STATUS.success && <TrendingList movies={movies}/>}
   </>
)
}


export default Movies