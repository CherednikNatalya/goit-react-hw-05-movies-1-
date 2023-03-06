
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import {List, TitleMovie, Item} from './TrendingList.styled'


const TrendingList =({movies}) => {
    const location = useLocation();
    return ( 
    
          <List>
			{movies.map(({ id, title }) => (
				<Item key={id}>
					<Link to={`movies/${id}`} state={{ from: location }}>
						
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
        id: PropTypes.string.isRequired,
        titleL: PropTypes.string.isRequired,
      })
    ),
  }

