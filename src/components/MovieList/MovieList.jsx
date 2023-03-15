import { Link, useLocation } from "react-router-dom";
import {List, Item, TitleMovie} from './MovieList.module'

const MovieList =({movies})=> {
    const location = useLocation();

    return(
    <List>
			{movies.map(({ id, title }) => (
				<Item key={id}>
					<Link to={`movies/${id}`} state={{ from: location }}>	
						<TitleMovie>{title}</TitleMovie>
					</Link>
				</Item>
			))}
		</List>

    )
}
export default MovieList