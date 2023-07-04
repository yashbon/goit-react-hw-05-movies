// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Leyout from './Leyout/Leyout';
// import Cast from './Cast/Cast';
const Cast = lazy(() => import('./Cast/Cast'));

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

// import { Reviews } from './Reviews/Reviews';
// for example ones option:
const Reviews = lazy(() =>
    import('./Reviews/Reviews').then(module => ({
        ...module,
        default: module.Reviews,
    }))
);

export const App = () => {
    return (
        <div
            style={{
                height: '100vh',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // fontSize: 40,
                color: '#010101',
            }}
        >
            {/* <h1 style={{ textAlign: 'center' }}>Movies</h1> */}

            <Routes>
                <Route path="/" element={<Leyout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </div>
    );
};
