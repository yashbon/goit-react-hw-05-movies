import SearchBar from 'components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';

function Movies() {
    const movies = ['movie-1', 'movie-2', 'movie-3'];

    const location = useLocation();
    console.log(location);

    return (
        <>
            <h1>Movies</h1>
            <SearchBar />
            {movies.map(movie => {
                return (
                    <Link
                        to={`${movie}`}
                        key={movie}
                        state={{ from: location }}
                    >
                        {movie}
                    </Link>
                );
            })}
        </>
    );
}

export default Movies;
