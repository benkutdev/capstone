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
`;

const AddAlbumButton = styled.button`
  width: 140px;
  height: 140px;
  background-color: #145a32;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const AlbumList = ({ albumCovers, onAlbumClick, searchBarRef }) => {
  const handleAddAlbumClick = () => {
    searchBarRef.current.focus();
  };
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
      <AddAlbumButton
        onClick={() => searchBarRef.current && searchBarRef.current.focus()}
      >
        Add Album
      </AddAlbumButton>
    </AlbumListContainer>
  );
};

export default AlbumList;
