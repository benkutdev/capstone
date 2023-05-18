import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const AlbumListContainer = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  margin: 90px auto 0px;
  max-width: 1200px;
  padding: 0 16px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const AlbumCover = styled(Image)`
  width: 140px;
  height: 140px;
  object-fit: cover;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(70%);
  }
`;

const AddAlbumButton = styled.button`
  width: 140px;
  height: 140px;
  background-color: #145a32;
  color: #f39c12;
  border: 1px solid #f39c12;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(243, 156, 18, 0.2);
    border-color: #f39c12;
  }

  &:active {
    background-color: #f39c12;
    transform: scale(0.95);
  }
`;

const AlbumList = ({ albumCovers, onAlbumClick, setShouldFocusSearchBar }) => {
  return (
    <AlbumListContainer>
      {albumCovers.map((album) => (
        <Link href={`/album/${album.id}`} key={album.id}>
          <AlbumCover
            alt={album.title}
            src={album.src}
            width={140}
            height={140}
            onClick={() => onAlbumClick(album)}
          />
        </Link>
      ))}
      <AddAlbumButton onClick={() => setShouldFocusSearchBar(true)}>
        Add Album
      </AddAlbumButton>
    </AlbumListContainer>
  );
};

export default AlbumList;
