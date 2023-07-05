import { useLocation } from 'react-router-dom';
import { LinkList, ListMovies, ListMoviesItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ListMovies>
            {movies.map(movie => (
                <ListMoviesItem key={movie.id}>
                    <LinkList
                        to={`movies/${movie.id}`}
                        state={{ from: location }}
                    >
                        {movie.original_title}
                    </LinkList>
                </ListMoviesItem>
            ))}
        </ListMovies>
    );
};

export default MoviesList;
