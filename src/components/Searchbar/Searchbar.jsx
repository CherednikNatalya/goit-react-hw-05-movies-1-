import css from '../Searchbar/Searchbar.module.css'
import Notiflix from 'notiflix';
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom';

const Searchbar =({onSubmit}) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query');

  
  const onChangeHandler = evt => {
   
    setSearchParam({ query: evt.target.value.trim() });
  };

  const handleSubmit = event => {
    event.preventDefault()
    
    if (!query.length) {
      Notiflix.Notify.warning('Enter something in the searchbar');
      return;
    }
    onSubmit(query);
    
}


  return (
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={handleSubmit}>
    
      <input
        className={css.input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search"
        value={query}
        onChange={onChangeHandler}
      />
    </form>
  </header>
  )
}
export default Searchbar


Searchbar.prototype ={
  onSubmit: PropTypes.func.isRequired,
}




