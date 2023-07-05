import { SearchForm } from './SearchBar.styled';

const SearchBar = props => {
    const { onChange, onSubmit } = props;

    return (
        <SearchForm onSubmit={onSubmit}>
            <input type="text" autoFocus={true} onChange={onChange} />
            <button type="submit">
                <span>Search</span>
            </button>
        </SearchForm>
    );
};

export default SearchBar;
