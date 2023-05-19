import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchResults from "../SearchResults/SearchResults.js";
import { useFocus } from "../Focus/useFocus.js";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #145a32;
  border: 1px solid #f39c12;
  border-radius: 8px;
  padding: 2px;
  position: relative;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #145a32;
  width: 80px;
  padding: 1px;
  font-size: 12px;
  color: #f39c12;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 12px;
  margin-left: 3px;
  color: #f39c12;

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ shouldFocusSearchBar, setShouldFocusSearchBar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [focusRef, setFocus] = useFocus();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = async (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    try {
      const response = await fetch(`/api/Search?query=${query}`);
      const data = await response.json();

      if (response.ok) {
        const searchResults = data.results;
        setSearchResults(searchResults);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    if (shouldFocusSearchBar) {
      setFocus();
      setShouldFocusSearchBar(false);
    }
  }, [shouldFocusSearchBar, setShouldFocusSearchBar, setFocus]);

  return (
    <SearchContainer>
      <form onSubmit={handleSearchFormSubmit}>
        <SearchInput
          type="text"
          placeholder=""
          value={searchQuery}
          onChange={handleSearchInputChange}
          ref={focusRef}
        />
        <SearchButton type="submit">
          <FaSearch />
        </SearchButton>
      </form>
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
    </SearchContainer>
  );
};

SearchBar.displayName = "SearchBar";

export default SearchBar;
