import React from "react";
import styled from "styled-components";
import Image from "next/image";

const AlbumDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background-color: #f39c12;
  border-radius: 7px;
  padding-top: 40px;
  max-width: 400px;
  margin: 0 auto;
`;

const AlbumImage = styled(Image)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default function AlbumDetail({ album, children }) {
  return (
    <AlbumDetailContainer>
      <AlbumImage
        src={album.src}
        alt={album.id}
        key={album.id}
        width={300}
        height={300}
      />
      {children}
    </AlbumDetailContainer>
  );
}
