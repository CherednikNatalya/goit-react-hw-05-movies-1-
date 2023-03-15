import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import {lazy, Suspense} from 'react'
import SharedLayout from './SharedLayout/SharedLayout'
import Loader from '../components/Loader/Loader'

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));


const App = () => {

  return (

    <BrowserRouter basename="/goit-react-hw-05-movies-1-">
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