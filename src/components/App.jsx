import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import {lazy, Suspense} from 'react'
import SharedLayout from './SharedLayout/SharedLayout'
// import Movies from '../pages/Movies/Movies'
// import Home from '../pages/Home/Home'
import Cast from '../pages/MovieDetails/Cast/Cast'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import Reviews from '../pages/MovieDetails/Reviews/Reviews'
import Loader from '../components/Loader/Loader'
const Home =lazy(()=> import ('../pages/Home/Home'))
const Movies =lazy(()=> import ('../pages/Movies/Movies'))

const App = () => {

  return (

    <BrowserRouter basename="goit-react-hw-05-movies-1-">
      <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies"  element={<Movies/>}/>

        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
};
export default App