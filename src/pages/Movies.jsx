// import MoviesList from 'components/MoviesList/MoviesList';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { getMovieByQuery } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function Movies() {
    const [searchMovies, setSerchMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

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

    const location = useLocation();
    // console.log('location', location);

    return (
        <>
            <h1>Movies</h1>
            <SearchBar
                location={location}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {searchMovies.length > 0 && (
                <MoviesList movies={searchMovies} />
                // <ul>
                //     {searchMovies.map(movie => (
                //         <li key={movie.id}>
                //             <Link to={`${movie.id}`} state={{ from: location }}>
                //                 {movie.original_title}
                //             </Link>
                //         </li>
                //     ))}
                // </ul>
            )}
        </>
    );
}

export default Movies;
