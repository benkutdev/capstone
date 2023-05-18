import React, { useState, useEffect, useRef } from "react";
import AppHeader from "../components/Header/Header.js";
import AlbumList from "../components/AlbumList/AlbumList.js";
import AlbumDetail from "../components/AlbumDetail/AlbumDetail.js";

const HomePage = () => {
  const [albumCovers, setAlbumCovers] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const searchBarRef = useRef(null);

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

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <>
      <AppHeader searchBarRef={searchBarRef} />
      <AlbumList
        albumCovers={albumCovers}
        onAlbumClick={handleAlbumClick}
        searchBarRef={searchBarRef}
      />
      {selectedAlbum && (
        <AlbumDetail
          album={selectedAlbum}
          onDelete={handleDeleteFromCollection}
          onAdd={handleAddToCollection}
          albumCovers={albumCovers}
          searchBarRef={searchBarRef}
        />
      )}
    </>
  );
};

export default HomePage;
