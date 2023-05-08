import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import SearchResults from "../SearchResults/SearchResults.js";

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

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = async (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (query.length > 4) {
      const API_KEY = process.env.NEXT_PUBLIC_DISCOGS_API_KEY;
      const API_SECRET = process.env.NEXT_PUBLIC_DISCOGS_API_SECRET;
      const API_URL = `https://api.discogs.com/database/search?q=${query}&type=artist,release&key=${API_KEY}&secret=${API_SECRET}`;
      const headers = {
        "User-Agent":
          "MyVinylCollectionApp/1.0 +http://myvinylcollectionapp.example.com",
      };

      try {
        const response = await fetch(API_URL, { headers });
        const data = await response.json();

        if (response.ok) {
          const searchResults = data.results;
          setSearchResults(searchResults);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
    setSearchQuery("");
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearchFormSubmit}>
        <SearchInput
          type="text"
          placeholder=""
          value={searchQuery}
          onChange={handleSearchInputChange}
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

export default SearchBar;
