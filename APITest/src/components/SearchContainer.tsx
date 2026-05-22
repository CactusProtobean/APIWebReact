import SearchIcon from '@mui/icons-material/Search';
import './SearchContainer.css';

const SearchContainer = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for GIFs, stickers, artists, and more..." />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchContainer