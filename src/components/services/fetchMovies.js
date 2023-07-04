import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9bd5849fe0df7e403f981c3192631e34';

const params = {
    api_key: API_KEY,
    language: 'en-US',
}

const getTrendingMovies = async () => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmQ1ODQ5ZmUwZGY3ZTQwM2Y5ODFjMzE5MjYzMWUzNCIsInN1YiI6IjY0OWMxZmIxOTYzODY0MDBlM2JiOTJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sc78zQWEUmWayIyQricXEa9zOuE3w2J6KYL2093KGg'
    //     }
    // };


    // const URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=9bd5849fe0df7e403f981c3192631e34'
    const URL = `${BASE_URL}trending/movie/day`
    // console.log('BASE_URL', BASE_URL);
    try {
        const response = await axios.get(URL, { params })
        // .then(function (response) {
        //     // console.log(response);
        // })
        // .catch(function (error) {
        //     console.error(error);
        // });

        // console.log(response.data.results);
        return response.data
    }
    catch (error) {
        console.error(error);
        return false
    }

}

const getMovieDetails = async (movieId) => {
    const URL = `${BASE_URL}movie/${movieId}`
    // console.log('URL:', URL);
    try {
        const response = await axios.get(URL, { params })
        return response.data
    } catch (error) {
        console.error(error);
        return false
    }
}

const getMovieByQuery = async (query) => {
    // console.log('getMovieByQuery(query)>>', query);
    const URL = `${BASE_URL}search/movie?&query='${query}'`
    // console.log('URL for query:', URL);
    try {
        const response = await axios.get(URL, { params })
        // console.log(response.data.results);
        return response.data
    } catch (error) {
        console.error(error);
        return false
    }
}

const getMovieCast = async (movieId) => {

    //https://api.themoviedb.org/3/movie/{movie_id}/credits

    const URL = `${BASE_URL}movie/${movieId}/credits`
    try {
        const response = await axios.get(URL, { params })
        return response.data
    } catch (error) {
        console.error(error);
        return false
    }
}

const getMovieReviews = async (movieId) => {

    //https://api.themoviedb.org/3/movie/{movie_id}/reviews

    const URL = `${BASE_URL}movie/${movieId}/reviews`
    try {
        const response = await axios.get(URL, { params })
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return false
    }
}

export { getTrendingMovies, getMovieDetails, getMovieByQuery, getMovieCast, getMovieReviews }
