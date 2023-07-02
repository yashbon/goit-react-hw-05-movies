import { useParams } from 'react-router-dom';

function Reviews() {
    const { movieId } = useParams();
    console.log('Reviews: ', movieId);
    console.log(useParams());

    return (
        <>
            <h4>Reviews</h4>
            <p>{movieId}</p>
        </>
    );
}

export default Reviews;
