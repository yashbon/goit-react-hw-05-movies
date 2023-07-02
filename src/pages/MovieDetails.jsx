import GoBack from 'components/GoBack/GoBack';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const paramsUrl = useParams();
    // console.log(paramsUrl);
    const { movieId } = paramsUrl;
    // const pathBack = {location.state.from ?? '/movies};

    const location = useLocation();
    console.log('location', location);
    const pathBackLocationRef = useRef(location.state?.from ?? '/movies');
    console.log(pathBackLocationRef);
    return (
        <>
            <h2>MoviesDetails</h2>
            <GoBack
                pathBack={pathBackLocationRef.current}
                // to={location.state.from}
            >
                Back
            </GoBack>
            <div>{movieId}</div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <Link to="cast">
                        <li>Cast for {movieId}</li>
                    </Link>
                    <Link to="reviews">
                        <li>Reviews for {movieId}</li>
                    </Link>
                </ul>
                <Outlet />
            </div>
        </>
    );
};

export default MovieDetails;
