import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

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

const SearchResult = styled.div`
  margin-right: 12px;
`;

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: scroll;
  margin-top: 8px;
  gap: 5px;
  max-height: 400px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 290px;
  background-color: #145a32;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchDiscogs = async (query) => {
    const API_URL = `/api/search?q=${query}`;

    try {
      const response = await axios.get(API_URL);

      if (response.status === 200) {
        const searchResults = response.data.results;
        setSearchResults(searchResults);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length > 4) {
      searchDiscogs(event.target.value);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?q=${searchQuery}`);
    setSearchQuery("");
    setSearchResults([]);
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
        <SearchResultsContainer>
          {searchResults.map((result) => (
            <Link href={`/album/${result.id}`} key={result.id}>
              <SearchResult key={result.id}>
                <Image
                  src={result.thumb}
                  alt={result.title}
                  width={140}
                  height={140}
                  style={{ objectFit: "contain" }}
                />
              </SearchResult>
            </Link>
          ))}
        </SearchResultsContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
