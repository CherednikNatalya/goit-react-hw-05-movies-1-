import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'

import {fetchCastById} from '../../../services/API'
import STATUS from '../../../services/status'
import imageReplace from '../../../images/poster-not-found.jpg'

import {  Content, ImgBox,  Item, List,  Value} from './Cast.styled'
import Loader from '../../../components/Loader/Loader'


const Cast = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.idle);
    const {movieId} =useParams()

    useEffect (()=>{
        const getMovies = async query => {
            setStatus(STATUS.pending)
            try {
               const data =await fetchCastById(movieId)
               onResolve(data) 
            } catch (error) {
                console.log(error);
                setStatus(STATUS.error); 
            }
        }
        getMovies(movieId)
    }, [movieId])
    
    const onResolve = data => {
        const movie = data.map(({ cast_id, profile_path, character, name }) => ({
            id: cast_id,
            img: profile_path,
            character: character,
            name :name
        }));
        setMovies(movie);
        setStatus(STATUS.success);
    }

    return(
        <>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && movies.length ===0 ? (<p>Not information</p>) :
        (
          <List>
            {movies.map(({id, img, character, name })=>(
                <Item key={id}>
<ImgBox>
			{img ? (
								<img src={`https://image.tmdb.org/t/p/w500`+ img} alt={name} width={115} height={175} />
							) : (
								<img src={imageReplace} alt="Plug" width={115} height={175} />
							)}
						</ImgBox>
						<Content>						
							<List>
								<Item>
									<Value>{name}</Value>
								</Item>
								<Item>	
								<Value>Сharacter: {character}</Value>
								</Item>
							</List>						
						</Content>
                </Item>
            ))}
          </List>  
        )
    }
     </>
    )
 }
export default Cast