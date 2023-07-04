import { getMovieCast } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    // console.log('Cast: ', movieId);

    //fetch
    useEffect(() => {
        getMovieCast(movieId).then(response => {
            if (!response) {
                return;
            }
            setCast([...response.cast]);
        });
        // console.log(cast);
    }, [movieId]);

    return (
        <>
            <h4>Cast</h4>
            {/* <p>{movieId}</p> */}

            <ul>
                {cast.map(person => (
                    <li key={person.id}>
                        <img
                            src={'https://image.tmdb.org/t/p/w200'.concat(
                                person.profile_path
                            )}
                            alt={person.name}
                        />
                        <br />
                        {person.name}
                        <br />
                        character: {person.character}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Cast;
