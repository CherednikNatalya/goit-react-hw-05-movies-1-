import Searchbar from '../../components/Searchbar/Searchbar'
// import STATUS from '../services/status'
import { useState} from "react";

const Movies = () => {
    const [searchQuery, setSearchQuery] =useState('')

    const onSubmit = (formSearch) => {
      setSearchQuery(formSearch);
      // setPage(1);
      // setImgData([]);
      // setTotalFind(0);
      console.log(searchQuery)
  }
    
return(
   <Searchbar onSubmit={onSubmit}/>
)
}


export default Movies