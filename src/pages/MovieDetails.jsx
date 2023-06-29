import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const movieId = useParams();
    // console.log(movieId);
    return (
        <>
            <h2>MoviesDetails</h2>
            <div>{movieId.movieId}</div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <Link to="cast">
                        <li>Cast for {movieId.movieId}</li>
                    </Link>
                    <Link to="reviews">
                        <li>Reviews for {movieId.movieId}</li>
                    </Link>
                </ul>
                <Outlet />
            </div>
        </>
    );
};

export default MovieDetails;
