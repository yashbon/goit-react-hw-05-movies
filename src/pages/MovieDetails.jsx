import GoBack from 'components/GoBack/GoBack';
import { getMovieDetails } from 'components/services/fetchMovies';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([{}]);
    const paramsUrl = useParams();
    const { movieId } = paramsUrl;

    // fetch
    //******************************************************************************** */
    useEffect(() => {
        getMovieDetails(movieId).then(response => {
            if (!response) {
                return;
            }
            setMovieDetails({ ...response });
        });
    }, [movieId]);
    //******************************************************************************** */

    const location = useLocation();
    // console.log(location);

    const pathBackLocationRef = useRef(location.state?.from ?? '/movies');
    // console.log('path back >>', pathBackLocationRef);
    return (
        <>
            <h2>MoviesDetails</h2>
            <GoBack
                pathBack={pathBackLocationRef.current}
                // to={pathBackLocationRef.current}
            >
                Back
            </GoBack>
            <div
                style={{
                    display: 'flex',
                    gap: '15px',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
            >
                <img
                    src={'https://image.tmdb.org/t/p/w300'.concat(
                        movieDetails.poster_path
                    )}
                    alt={movieDetails.title}
                />
                <div>
                    <h3>{movieDetails.title}</h3>
                    <p>
                        User score: {Math.round(movieDetails.vote_average * 10)}
                        %
                    </p>
                    <h4>Overview</h4>
                    <p>{movieDetails.overview}</p>
                    <h4>Genres</h4>
                    <p>
                        {movieDetails.genres
                            ? movieDetails.genres.map(genre => genre.name + ' ') //Є ПИТАННЯ???????????????
                            : ''}
                    </p>
                </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <Link to="cast">
                        <li>Cast</li>
                    </Link>
                    <Link to="reviews">
                        <li>Reviews</li>
                    </Link>
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
};

export default MovieDetails;
