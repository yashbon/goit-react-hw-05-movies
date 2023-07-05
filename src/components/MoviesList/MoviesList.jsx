import { useLocation } from 'react-router-dom';
import { ListMovies, ListMoviesItem, LinkMovie } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ListMovies>
            {movies.map(movie => (
                <ListMoviesItem key={movie.id}>
                    <LinkMovie
                        to={`/movies/${movie.id}`}
                        state={{ from: location }}
                    >
                        {movie.original_title}
                    </LinkMovie>
                </ListMoviesItem>
            ))}
        </ListMovies>
    );
};

export default MoviesList;
