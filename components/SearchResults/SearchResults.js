import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import React, { useState } from "react";

const SearchResult = styled.div`
  margin-top: 10px;
`;

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: scroll;
  margin-top: 8px;
  gap: 5px;
  max-height: 480px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: #f39c12;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const LoadMoreButton = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #145a32;
  color: #f39c12;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;

  &:hover {
    background-color: #f39c12;
    color: #145a32;
    border: 1px solid #145a32;
  }
`;

const SearchResults = ({ searchResults }) => {
  const [numResultsToShow, setNumResultsToShow] = useState(3);

  const filteredResults = searchResults.filter(
    (result) => result.type === "release"
  );

  const handleLoadMore = async () => {
    await fetchMoreResults();
    setNumResultsToShow(numResultsToShow + 5);
  };

  const fetchMoreResults = async () => {
    try {
    } catch (error) {
      console.error("Error fetching more search results:", error);
    }
  };

  const displayedResults = filteredResults.slice(0, numResultsToShow);

  return (
    <>
      <SearchResultsContainer>
        {displayedResults.map((result) => (
          <Link href={`/album/${result.id}`} key={result.id}>
            <SearchResult>
              <Image
                src={result.cover_image}
                unoptimized
                alt={result.title}
                width={140}
                height={140}
                style={{ objectFit: "contain" }}
              />
            </SearchResult>
          </Link>
        ))}
        {numResultsToShow < filteredResults.length && (
          <LoadMoreButton onClick={handleLoadMore}>MORE</LoadMoreButton>
        )}
      </SearchResultsContainer>
    </>
  );
};

export default SearchResults;
