import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #145a32;
  border: 1px solid #f39c12;
  border-radius: 8px;
  padding: 2px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #145a32;
  width: 80px;
  padding: 1px;
  font-size: 12px;

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
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?q=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearchSubmit}>
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
    </SearchContainer>
  );
};

export default SearchBar;
