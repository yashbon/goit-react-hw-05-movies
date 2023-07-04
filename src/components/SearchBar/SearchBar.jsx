const SearchBar = props => {
    const { onChange, onSubmit } = props;

    return (
        <form onSubmit={onSubmit}>
            <input type="text" autoFocus={true} onChange={onChange} />
            <button type="submit">
                <span>Search</span>
            </button>
        </form>
    );
};

export default SearchBar;
