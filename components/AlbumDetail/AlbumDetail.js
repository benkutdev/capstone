import React from "react";
import styled from "styled-components";
import Image from "next/image";
import BackButton from "../Button/BackButton.js";

const AlbumDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f39c12;
  border-radius: 7px;
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

export default function AlbumDetail({ album }) {
  return (
    <>
      <AlbumDetailContainer>
        <AlbumImage
          src={album.src}
          alt={album.title}
          width={300}
          height={300}
        />
        <p>{album.name}</p>
        <p>{album.title}</p>
        <p>{album.genre}</p>
        <p>{album.year}</p>
        <BackButton />
      </AlbumDetailContainer>
    </>
  );
}
