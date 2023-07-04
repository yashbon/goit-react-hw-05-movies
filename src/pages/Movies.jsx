import SearchBar from 'components/SearchBar/SearchBar';
import { getMovieByQuery } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

function Movies() {
    const [searchMovies, setSerchMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);

    // const [page, setPage] = useState(1); ?????????????????

    //-----------------------------------------
    const handleChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        setSearchParams({ query: searchQuery });
        event.currentTarget.reset();
    };
    //-----------------------------------------

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) {
            return;
        }
        getMovieByQuery(query).then(response => {
            if (!response) {
                return;
            }
            setSerchMovies([...response.results]);
        });
    }, [searchParams]);

    return (
        <>
            <h1>Movies</h1>
            <SearchBar
                location={location}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {searchMovies.length > 0 && (
                <ul>
                    {searchMovies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`} state={{ from: location }}>
                                {movie.original_title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Movies;
