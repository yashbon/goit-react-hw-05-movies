const SearchBar = () => {
    return (
        <div>
            <input
                type="text"
                // value={value}
                // onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit">
                <span>Search</span>
            </button>
        </div>
    );
};

export default SearchBar;
