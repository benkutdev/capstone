import { useState, useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [albumCovers, setAlbumCovers] = useState([]);

  useEffect(() => {
    const storedAlbums = localStorage.getItem("albumCovers");
    if (storedAlbums) {
      setAlbumCovers(JSON.parse(storedAlbums));
    }
  }, []);

  const handleAddToCollection = (newAlbum) => {
    const albumExists = albumCovers.some((album) => album.id === newAlbum.id);
    if (!albumExists) {
      setAlbumCovers((prevAlbumCovers) => {
        const updatedAlbumCovers = [...prevAlbumCovers, newAlbum];
        localStorage.setItem("albumCovers", JSON.stringify(updatedAlbumCovers));
        return updatedAlbumCovers;
      });
    }
  };

  const handleDeleteFromCollection = (albumId) => {
    setAlbumCovers((prevAlbumCovers) => {
      const updatedAlbumCovers = prevAlbumCovers.filter(
        (album) => album.id !== albumId
      );
      localStorage.setItem("albumCovers", JSON.stringify(updatedAlbumCovers));
      return updatedAlbumCovers;
    });
  };

  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component
          {...pageProps}
          albumCovers={albumCovers}
          onAddToCollection={handleAddToCollection}
          onDeleteFromCollection={handleDeleteFromCollection}
        />
      </SessionProvider>
    </>
  );
}
