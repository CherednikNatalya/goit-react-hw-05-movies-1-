import { useState } from "react";
import css from '../Searchbar/Searchbar.module.css'
import Notiflix from 'notiflix';
import PropTypes from 'prop-types'


const Searchbar =({onSubmit}) => {
const [formSearch, setFormSearch] =useState ('')
  

  const onChangeHandler = evt => {
    setFormSearch(evt.currentTarget.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault()
    if (!formSearch.length) {
      Notiflix.Notify.warning('Enter something in the searchbar');
      return;
    }
    onSubmit(formSearch);
    setFormSearch('')
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
        value={formSearch}
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




