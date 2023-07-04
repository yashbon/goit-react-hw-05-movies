import { getMovieReviews } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
    const { movieId } = useParams();
    // console.log('Reviews: ', movieId);
    // console.log(useParams());
    const [reviews, setReviews] = useState([]);
    // console.log('Cast: ', movieId);

    //fetch
    useEffect(() => {
        // {
        //     "id": 19995,
        //     "page": 1,
        //     "results": [
        //       {
        //         "author": "daisyrowley",
        //         "author_details": {
        //           "name": "",
        //           "username": "daisyrowley",
        //           "avatar_path": "/https://secure.gravatar.com/avatar/c9b5f775d2a1fb3b23b358d60866d244.jpg",
        //           "rating": null
        //         },
        //         "content": "Avatar is an overwhelming, immersive spectacle. The state-of-the-art 3D technology draws us in, but it is the vivid weirdness of Cameron's luridly imagined tropical other world that keeps us fascinated. I like this film and I have written many review for <a href=\"https://domywriting.com/\">essay writing service</a>. The special effects are so good here that you don't even notice them. It is eerie how Cameron has made it look and feel like he is just pointing a camera at the action.",
        //         "created_at": "2018-08-07T09:22:41.402Z",
        //         "id": "5b6964e1925141404f0d1094",
        //         "updated_at": "2021-06-23T15:58:11.053Z",
        //         "url": "https://www.themoviedb.org/review/5b6964e1925141404f0d1094"
        //       },
        //       {
        //         "author": "John Chard",
        //         "author_details": {
        //           "name": "",
        //           "username": "John Chard",
        //           "avatar_path": "/utEXl2EDiXBK6f41wCLsvprvMg4.jpg",
        //           "rating": 5
        //         },
        //         "content": "It's cinema Jim, but not as we know it. \r\n\r\nSo here it is then, what has been in gestation in James Cameron's mind for over 12 years finally hit the silver screen towards the back end of 2009. Made for gazillions amount of cash, Avatar went on to make a billion trillion in Worldwide receipts-and this before the rush rush release of DVD/BLU RAY sales are factored into the equation. The film, and all its technical wizardry, is quite simply a gargantuan piece of cinematic history. Released in 2d and 3d, and probably some other format that I'm forgetting, every advanced tool of the trade has been utilised by Cameron and his team to create what is now the ultimate popcorn blockbuster. Shame then, that away from the visual extravaganza the film is as shallow as this review will ultimately end up being.\r\n\r\nNo doubt about it, this is a joy for the eyes and ears, the minuscule details are wonderful and the colour positively pings from every frame. But in the eagerness to create such splendour they forgot to put any substance into the writing. This is plot simplicity. And even its messages, as Cameron smugly preaches his sermon from the pulpit, now seem old hat. Do we really need another boink over the head about eco invasion? Or a curt reminder of American infiltration into some land where motives are suspicious at best? No we don't really do we? Worse still is some of the dialogue, which quite frankly could have come from some playground encounter as the kiddies play kiss chase or bang bang your dead army. There's also a sense of familiarity with other better scripted film's, Dances *cough* With *cough* Wolves *cough* It's as if Cameron just knew that narrative structure wasn't as important as having the expensive gimmicks. He's like a modern day William Castle-only with considerably more readies at his disposal.\r\n\r\nThe cast are OK, Zoe Saldana puts a sexy feistiness to her blue alien Neytiri, Sam Worthington keeps the humanistic elements just about above water, while Sigourney Weaver is as ever the consummate professional. But ironically, in a film shimmering bright in 2d & 3d, the characters are all one dimensional. None more so than Stephen \"The Party Crasher\" Lang's Colonel. A man so gruff and gung-ho menacing he really ought to be in Sly Stallone's upcoming testo movie The Expendables. Nominated for nine Academy Awards, including Best Picture and Best Director, it won three, for Best Cinematography, Best Visual Effects, and Best Art Direction. Those were richly deserved. They also tell us all we need to now about Cameron's Behemoth. 5/10",
        //         "created_at": "2020-04-25T14:27:48.316Z",
        //         "id": "5ea448e4bdc34c0020261327",
        //         "updated_at": "2021-06-23T15:58:37.447Z",
        //         "url": "https://www.themoviedb.org/review/5ea448e4bdc34c0020261327"
        //       },
        //       {
        //         "author": "MSB",
        //         "author_details": {
        //           "name": "MSB",
        //           "username": "msbreviews",
        //           "avatar_path": "/https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
        //           "rating": 8
        //         },
        //         "content": "Rewatching Avatar confirmed my love for Pandora. Exquisite world-building by James Cameron, memorable score by James Horner & jaw-dropping, innovative visuals that complement wonderful storytelling.\r\n\r\nHow can people not remember these characters?! Super excited about tomorrow's IMAX screening of Avatar: The Way of Water!",
        //         "created_at": "2022-12-17T09:49:43.827Z",
        //         "id": "639d90b74f33ad008cffa3f4",
        //         "updated_at": "2022-12-17T09:49:43.897Z",
        //         "url": "https://www.themoviedb.org/review/639d90b74f33ad008cffa3f4"
        //       },
        //       {
        //         "author": "tomasfv",
        //         "author_details": {
        //           "name": "",
        //           "username": "tomasfv",
        //           "avatar_path": null,
        //           "rating": 10
        //         },
        //         "content": "**Excellent!!! **",
        //         "created_at": "2023-01-07T20:51:30.351Z",
        //         "id": "63b9db528c0a48008537eacc",
        //         "updated_at": "2023-01-09T15:42:11.726Z",
        //         "url": "https://www.themoviedb.org/review/63b9db528c0a48008537eacc"
        //       }
        //     ],
        //     "total_pages": 1,
        //     "total_results": 4
        //   }
        getMovieReviews(movieId).then(response => {
            if (!response) {
                return;
            }
            // console.log(response);
            setReviews([...response.results]);
        });
    }, [movieId]);

    return (
        <>
            <h4>Reviews</h4>
            {/* <p>{movieId}</p> */}
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
