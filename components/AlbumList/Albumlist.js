import styled from "styled-components";
import curtisAlbum from "../../public/images/curtis.jpeg";
import Image from "next/image";

const AlbumListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  overflow-x: scroll;
  padding: 20px;
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
    <>
      {albumCovers.map((album) => (
        <Image
          alt={album.id}
          src={album.src}
          key={album.id}
          width={130}
          height={130}
          object-fit="cover"
        />
      ))}
    </>
  );
};

export default AlbumList;
