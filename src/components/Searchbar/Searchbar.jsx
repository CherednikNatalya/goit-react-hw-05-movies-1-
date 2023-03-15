// import css from '../Searchbar/Searchbar.module.css'
// import Notiflix from 'notiflix';
// import { useState } from 'react';

// // import PropTypes from 'prop-types'
// import { useSearchParams } from 'react-router-dom';


// const Searchbar =() => {
//   const [searchQuery, setSearchQuery] = useState('');
//   // const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query');

  
//   const handleInput = evt => {
//     setSearchParam({ query: evt.target.value.trim() });
//   };

//   const handleSubmit = event => {
//     event.preventDefault()
//     if (!query.length) {
//       Notiflix.Notify.warning('Enter something in the searchbar');
//       return;
//     }
//     onSubmit(query);   
// // }

// const handleInput = evt => {
//   setSearchParams(evt.target.value.trim());
// };


// useEffect(() => {
//   if (!query) {
//     return;
//   }
//   fetchSearchMovies(query).then(data => {
//     setMovies(data);
//   });
// }, [searchParams, query]);

// const handleSubmit = event => {
//   event.preventDefault()
//   if (!query.length) {
//     Notiflix.Notify.warning('Enter something in the searchbar');
//     return;
//   }
//   setSearchParams({ query: searchQuery });
//   setSearchQuery(''); 
// }

//   return (
//     <header className={css.searchbar}>
//     <form className={css.searchForm} onSubmit={handleSubmit}>
    
//       <input
//         className={css.input}
//         type="text"
//         autocomplete="off"
//         autofocus
//         placeholder="Search"
//         onChange={handleInput}
//           value={searchQuery}
//       />
//       <button type="submit" >
//           Search
//         </button>
//     </form>
    
//   </header>
//   )
// }
// export default Searchbar

// Searchbar.prototype ={
//   onSubmit: PropTypes.func.isRequired,
// }





