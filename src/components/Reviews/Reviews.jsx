import { getMovieReviews } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    //fetch
    useEffect(() => {
        getMovieReviews(movieId).then(response => {
            if (!response) {
                return;
            }
            setReviews([...response.results]);
        });
    }, [movieId]);

    return (
        <>
            <h4>Reviews</h4>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

// export { Reviews };
