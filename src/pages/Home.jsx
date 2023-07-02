import { getMovies } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();
    useEffect(() => {
        getMovies().then(async response => {
            setTrendingMovies([...response.results]);
        });
    }, []);

    return (
        <>
            <h1>Home</h1>
            <ul>
                {trendingMovies.map(item => (
                    <li key={item.id}>
                        <Link
                            to={`movies/${item.id}`}
                            state={{ from: location }}
                        >
                            {item.id}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;
