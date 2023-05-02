import styled from "styled-components";
import curtisAlbum from "../../public/images/curtis.jpeg";
import Image from "next/image";

const AlbumListContainer = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  margin: 90px auto 0px;
  max-width: 1200px;
  padding: 0 16px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const AlbumList = () => {
  const albumCovers = [
    { id: 1, src: curtisAlbum },
    { id: 2, src: curtisAlbum },
    { id: 3, src: curtisAlbum },
    { id: 4, src: curtisAlbum },
    { id: 5, src: curtisAlbum },
    { id: 6, src: curtisAlbum },
    { id: 7, src: curtisAlbum },
    { id: 8, src: curtisAlbum },
    { id: 9, src: curtisAlbum },
    { id: 10, src: curtisAlbum },
    { id: 11, src: curtisAlbum },
    { id: 12, src: curtisAlbum },
    { id: 13, src: curtisAlbum },
    { id: 14, src: curtisAlbum },
    { id: 15, src: curtisAlbum },
    { id: 16, src: curtisAlbum },
    { id: 17, src: curtisAlbum },
    { id: 18, src: curtisAlbum },
    { id: 19, src: curtisAlbum },
    { id: 20, src: curtisAlbum },
    { id: 21, src: curtisAlbum },
    { id: 22, src: curtisAlbum },
    { id: 23, src: curtisAlbum },
    { id: 24, src: curtisAlbum },
    { id: 25, src: curtisAlbum },
    { id: 26, src: curtisAlbum },
    { id: 27, src: curtisAlbum },
    { id: 28, src: curtisAlbum },
    { id: 29, src: curtisAlbum },
    { id: 30, src: curtisAlbum },
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
