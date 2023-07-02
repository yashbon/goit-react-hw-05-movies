import axios from "axios";


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35752647-f3bb72efc92106ef6393a7805';

const getImages = async (pictureName, page) => {
    // console.log(pictureName, page);
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: pictureName,
        imae_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
    })
    // fetch()
    const URL = `${BASE_URL}?${searchParams}`;
    // console.log(URL);
    const response = await axios.get(URL);

    // console.log(response.data);
    return response.data;
}

// getImages()

// const axios = require('axios');

const getMovies = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmQ1ODQ5ZmUwZGY3ZTQwM2Y5ODFjMzE5MjYzMWUzNCIsInN1YiI6IjY0OWMxZmIxOTYzODY0MDBlM2JiOTJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sc78zQWEUmWayIyQricXEa9zOuE3w2J6KYL2093KGg'
        }
    };
    const URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=9bd5849fe0df7e403f981c3192631e34'

    const response = await axios.get(URL)
    // .then(function (response) {
    //     // console.log(response);
    // })
    // .catch(function (error) {
    //     console.error(error);
    // });

    // console.log(response.data.results);
    return response.data
}
// getMovies()


export { getMovies }
export { getImages }
