import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'

import {fetchReviewsById} from '../../../services/API'
import STATUS from '../../../services/status'


import { Item, List, Name, Text} from './Reviews.styled'
import Loader from '../../../components/Loader/Loader'


const Reviews =()=>{
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.idle);
    const {movieId} =useParams()

    useEffect (()=>{
        const getMovies = async query => {
            setStatus(STATUS.pending)
            try {
               const data =await fetchReviewsById(movieId)
               onResolve(data) 
            } catch (error) {
                console.log(error);
                setStatus(STATUS.error); 
            }
        }
        getMovies(movieId)
    }, [movieId])
    
    const onResolve = data => {
        const dataReviews = data.map(({ id, author, content}) => ({
            id, 
            author, 
            content
        }));
        setMovies(dataReviews);
        setStatus(STATUS.success);
    }
    
    return (
<>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && movies.length ===0 ? (<p>We don't have any reviews for this movies</p>) :
        (<List>
            {movies.map(({id, author, content})=>(
                <Item key={id}>
						<Name>Author:{author}</Name>
						<Text>{content}</Text>					
                </Item>
            ))}
          </List>  
        )
    }
     </>
    )
}

export default Reviews