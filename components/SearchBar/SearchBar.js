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
  flex-direction: column;
  align-items: flex-end;
  overflow-x: scroll;
  margin-top: 8px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f39c12;
    border-radius: 2px;
  }
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
    if (event.target.value.length > 2) {
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
                  width={70}
                  height={70}
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
