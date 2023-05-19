import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header/Header.js";
import AlbumList from "../components/AlbumList/AlbumList.js";
import AlbumDetail from "../components/AlbumDetail/AlbumDetail.js";

const HomePage = () => {
  const [albumCovers, setAlbumCovers] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [shouldFocusSearchBar, setShouldFocusSearchBar] = useState(false);

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
      <AppHeader
        shouldFocusSearchBar={shouldFocusSearchBar}
        setShouldFocusSearchBar={setShouldFocusSearchBar}
      />{" "}
      <AlbumList
        albumCovers={albumCovers}
        onAlbumClick={handleAlbumClick}
        setShouldFocusSearchBar={setShouldFocusSearchBar}
      />
      {selectedAlbum && (
        <AlbumDetail
          album={selectedAlbum}
          onDelete={handleDeleteFromCollection}
          onAdd={handleAddToCollection}
          albumCovers={albumCovers}
        />
      )}
    </>
  );
};

export default HomePage;
