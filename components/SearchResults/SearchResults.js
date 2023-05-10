import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

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
  max-height: 450px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: #f39c12;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SearchResults = ({ searchResults }) => {
  const filteredResults = searchResults.filter(
    (result) => result.type === "release"
  );

  return (
    <SearchResultsContainer>
      {filteredResults.map((result) => (
        <Link href={`/album/${result.id}`} key={result.id}>
          <SearchResult>
            <Image
              src={result.cover_image}
              alt={result.title}
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </SearchResult>
        </Link>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
