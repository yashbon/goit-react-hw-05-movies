import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
// import // Link,
// // useLocation,
// 'react-router-dom';

function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    // const location = useLocation();
    useEffect(() => {
        getTrendingMovies().then(response => {
            if (!response) {
                return;
            }
            // console.log(response.results);
            setTrendingMovies([...response.results]);
        });
    }, []);

    return (
        <>
            {/* <h1>Home</h1> */}
            <h2>Trending today</h2>
            <MoviesList
                movies={trendingMovies}
                //  state={{ from: location }}
            />
            {/* <ul>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <Link
                            to={`movies/${movie.id}`}
                            state={{ from: location }}
                        >
                            {movie.original_title}
                        </Link>
                    </li>
                ))}
            </ul> */}
        </>
    );
}

export default Home;
