import {  Content, ImgBox, Inner, Item, List, Name, Value, Overview, Text, Title} from './MovieCart.styled'
import imageReplace from '../../images/poster-not-found.jpg'

const MovieCart =({movie}) =>{
    return(
<Inner>
						<ImgBox>
							{movie.img ? (
								<img src={`https://image.tmdb.org/t/p/w500`+ movie.img} alt={movie.title} width={250} height={375} />
							) : (
								<img src={imageReplace} alt="Plug" width={250} height={375} />
							)}
						</ImgBox>
						<Content>
							{movie.releaseDate ? (
								<Title>
									{movie.title} ({movie.releaseDate})
								</Title>
							) : (
								<Title>{movie.title}</Title>
							)}
							<List>
								<Item>
									<Name>User score</Name>
									<Value>
										<span> {movie.voteAverage} %</span>
									</Value>
								</Item>
								<Item>
									<Name>Genres</Name>
									{movie.genres ? <Value>{movie.genres}</Value> : <Value>Not information</Value>}
								</Item>
							</List>
							<Overview>Overview</Overview>
							{movie.overview ? <Text>{movie.overview}</Text> : <Text>Not information</Text>}
						</Content>
					</Inner>
      
    )
}

export default MovieCart