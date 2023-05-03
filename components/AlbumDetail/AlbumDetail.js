import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

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

export default function AlbumDetail({ album, children }) {
  const router = useRouter();

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
      <button onClick={() => router.push("../")}>BACK</button>
    </AlbumDetailContainer>
  );
}
