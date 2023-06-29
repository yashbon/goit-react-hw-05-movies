import { Link } from 'react-router-dom';

function Movies() {
    const movies = ['movie-1', 'movie-2', 'movie-3'];
    return (
        <>
            <h1>Movies</h1>
            {movies.map(movie => {
                return (
                    <Link to={`${movie}`} key={movie}>
                        {movie}
                    </Link>
                );
            })}
        </>
    );
}

export default Movies;
