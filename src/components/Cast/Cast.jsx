import { useParams } from 'react-router-dom';

function Cast() {
    const { movieId } = useParams();
    console.log(movieId);

    return (
        <>
            <h4>Cast</h4>
            <p>{movieId}</p>
        </>
    );
}

export default Cast;
