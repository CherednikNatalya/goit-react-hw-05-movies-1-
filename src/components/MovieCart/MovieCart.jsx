const MovieCart =({ img, title,releaseDate, overview, genres, voteAverage}) =>{
    return(
       <img src={`https://image.tmdb.org/t/p/w500`+ {img}} alt="" />
    )
}

export default MovieCart