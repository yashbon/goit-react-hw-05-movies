// import { useState } from 'react';

const SearchBar = props => {
    // console.log(props);
    const { onChange, onSubmit } = props;

    // const [searchText, setSearchText] = useState('');

    // const handleChange = event => {
    //     setSearchText(event.target.value);
    // };

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     handleSearch(searchText);
    //     setSearchText('');
    //     event.currentTarget.reset();
    // };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                autoFocus={true}
                // value={'sasas'}
                onChange={onChange}
            />
            <button type="submit">
                <span>Search</span>
            </button>
        </form>
    );
};

export default SearchBar;
