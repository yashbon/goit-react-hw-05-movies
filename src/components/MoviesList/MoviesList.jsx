import { useLocation } from 'react-router-dom';
import { LinkList, List, ListItem } from './MoviesList.styled';

function MoviesList({ movies }) {
    const location = useLocation();
    return (
        <List>
            {movies.map(movie => (
                <ListItem key={movie.id}>
                    <LinkList
                        to={`movies/${movie.id}`}
                        state={{ from: location }}
                    >
                        {movie.original_title}
                    </LinkList>
                </ListItem>
            ))}
        </List>
    );
}

export default MoviesList;
