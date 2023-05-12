import React from "react";
import styled from "styled-components";
import Image from "next/image";
import BackButton from "../Button/BackButton.js";
import DeleteButton from "../Button/DeleteButton.js";
import HeartButton from "../Button/HeartButton.js";
import PlusButton from "../Button/PlusButton.js";

const AlbumDetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f39c12;
  padding-top: 40px;
  max-width: 300px;
  max-height: 900px;
  margin: 90px auto 0;
`;

const AlbumImage = styled(Image)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const AlbumDetail = ({ album, onDelete, onAdd, albumCovers }) => {
  const addToCollection = () => {
    const albumExists = albumCovers.some(
      (existingAlbum) => existingAlbum.id === album.id
    );
    if (!albumExists) {
      onAdd(album);
    }
  };

  const handleDelete = () => {
    onDelete(album.id);
  };

  return (
    <AlbumDetailContainer>
      <HeartButton />
      <AlbumImage
        src={album.src}
        unoptimized
        alt={album.title}
        width={300}
        height={300}
      />
      <p>{album.name}</p>
      <p>{album.title}</p>
      <p>{album.genre}</p>
      <p>{album.year}</p>
      <BackButton />
      <DeleteButton onDelete={handleDelete} />
      <PlusButton onAdd={addToCollection} album={album} />
    </AlbumDetailContainer>
  );
};

export default AlbumDetail;
