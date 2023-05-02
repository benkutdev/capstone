import styled from "styled-components";
import curtisAlbum from "../../public/images/curtis.jpeg";
import Image from "next/image";

const AlbumListContainer = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  margin: 32px auto 0;
  max-width: 1200px;
  padding: 0 16px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const AlbumList = () => {
  const albumCovers = [
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
    { id: 1, src: curtisAlbum },
  ];

  return (
    <AlbumListContainer>
      {albumCovers.map((album) => (
        <Image
          alt={album.id}
          src={album.src}
          key={album.id}
          width={140}
          height={140}
          style="cover"
        />
      ))}
    </AlbumListContainer>
  );
};

export default AlbumList;
