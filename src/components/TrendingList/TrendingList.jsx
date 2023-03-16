
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import {List, TitleMovie, Item, ImageBox} from './TrendingList.styled'
import imageReplace from '../../images/poster-not-found.jpg'

const TrendingList =({movies}) => {
    const location = useLocation();
    return ( 
    
          <List>
			{movies.map(({ id, img, title }) => (
				<Item key={id}>
					<Link to={`movies/${id}`} state={{ from: location }}>	
          <ImageBox>
											{img ? (
												<img src={`https://image.tmdb.org/t/p/w500` + img} alt={title} width={232} height={350} />
											) : (
												<img src={imageReplace} alt="Plug" width={232} height={350} />
											)}
										</ImageBox>
            <TitleMovie>{title}</TitleMovie>
					</Link>
				</Item>
			))}
		</List>


    );
  }

export default TrendingList

TrendingList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  }

