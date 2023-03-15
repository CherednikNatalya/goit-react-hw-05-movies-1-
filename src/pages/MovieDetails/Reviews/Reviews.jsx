import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'

import {fetchReviewsById} from 'services/API'
import STATUS from 'services/status'


import {  List, Name, Text} from './Reviews.styled'
import Loader from 'components/Loader/Loader'


const Reviews =()=>{
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.idle);
    const {movieId} =useParams()

    useEffect (()=>{
        const getReviews = async query => {
            setStatus(STATUS.pending)
            try {
               const data =await fetchReviewsById(query)
              
               onResolve(data) 
            } catch (error) {
                console.log(error);
                setStatus(STATUS.error); 
            }
        }
        getReviews(movieId)
    }, [movieId])
    
    const onResolve = data => {
        const dataReviews = data.map(({ id, author, content}) => ({
            id, 
            author, 
            content
        }));
        setReviews(dataReviews);
        setStatus(STATUS.success);
    }
    
    return (
<>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && reviews.length ===0 ? (<p>We don't have any reviews for this movies</p>) :
        (<List>
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <Name>{author}</Name>
                    <Text>{content}</Text>
                </li>
            ))}
        </List> 
        )}
     </>
    )
}

export default Reviews