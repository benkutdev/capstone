import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

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

const SearchResults = ({ searchResults }) => {
  const filteredResults = searchResults.filter(
    (result) => result.type === "release"
  );

  return (
    <SearchResultsContainer>
      {filteredResults.map((result) => (
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
  );
};

export default SearchResults;
