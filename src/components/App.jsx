import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from './SharedLayout/SharedLayout'
import Movies from '../pages/Movies/Movies'
import Home from '../pages/Home/Home'
import Cast from '../components/Cast/Cast'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import Reviews from '../components/Reviews/Reviews'

const App = () => {
  return (

    <BrowserRouter basename="/goit-react-hw-05-movies-1-">
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
};
export default App