import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Leyout from './Leyout/Leyout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

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
                    {/* <Route path="*" element={<>NotFound </>} /> */}
                </Route>
            </Routes>
        </div>
    );
};
