import { useLocation } from 'react-router-dom';
import { ListMovies, ListMoviesItem, LinkMovie } from './MoviesList.styled';

const MoviesList = props => {
    // console.log(props);
    const {
        movies,
        // state
    } = props;
    // console.log(state);
    const location = useLocation();
    return (
        <ListMovies>
            {movies.map(movie => (
                <ListMoviesItem key={movie.id}>
                    <LinkMovie
                        to={`/movies/${movie.id}`}
                        state={{ from: location }}
                        // state={state}
                    >
                        {movie.original_title}
                    </LinkMovie>
                </ListMoviesItem>
            ))}
        </ListMovies>
    );
};

export default MoviesList;
