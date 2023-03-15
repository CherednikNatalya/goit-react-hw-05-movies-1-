import Notiflix from 'notiflix';
import { useState, useEffect } from "react";


import {fetchSearchMovies} from '../../services/API'
import STATUS from '../../services/status'
import Loader from '../../components/Loader/Loader'

import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Btn, Form, Input, Section, List, TitleMovie,Item , Title } from './Movies.styled'

Notiflix.Notify.init({
	width: '400px',
	fontSize: '15px',
});


const Movies = () => {

    const [status, setStatus] =useState(STATUS.idle)
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([])
  
    const searchName = searchParams.get('query');
	const location = useLocation();

	const handleSubmit = e => {
		e.preventDefault();
		const { value } = e.target.elements.search;
		if (value === '') {
			Notiflix.Notify.info('Please, fill in the search field!');
		}
		setMovies([]);
		setSearchParams({ query: value });
	};

	useEffect(() => {
		if (!searchName) return;
		if (searchName === '') return;
		const getMovies = async () => {
			setStatus(STATUS.pending);
			try {
				const data = await fetchSearchMovies(searchName);
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus(STATUS.error);
			}
		};
		getMovies();
	}, [searchName]);

	const onResolve = data => {
		if (data.length === 0) {
			Notiflix.Notify.failure(
				'Sorry, there are no images matching your search query. Please try again.'
			);
			setStatus(STATUS.idle);
			return;
		}
		const movie = data.map(({ id, poster_path, original_title }) => ({
			id,
			img: poster_path,
			title: original_title,
		}));
		setMovies(movie);
		setStatus(STATUS.success);
	};

   
  return (
		<Section>
			<Form onChange={handleSubmit}>
				<Input type="text" 
        name="search" 
        placeholder="Enter movie name" 
        autofocus
        autoComplete="off" />
				<Btn type="submit">Search</Btn>
			</Form>
			{/* {status === STATUS.error && <NotFound>NOT FOUND</NotFound>} */}
			{status === STATUS.pending && <Loader/>}
			{status === STATUS.success && (
				<>
					<Title>Search results</Title>
          <List>
			{movies.map(({ id, title }) => (
				<Item key={id}>
					<Link to={`movies/${id}`} state={{ from: location }}>	
						<TitleMovie>{title}</TitleMovie>
					</Link>
				</Item>
			))}
		</List>
				</>
			)}
		</Section>
	);

}


export default Movies