import React, { useRef } from "react";
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

const AlbumList = ({ albumCovers, onAlbumClick }) => {
  const searchInputRef = useRef(null);

  const handleFocusSearchBar = () => {
    searchInputRef.current.focus();
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
    </AlbumListContainer>
  );
};

export default AlbumList;
