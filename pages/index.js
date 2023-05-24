import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header/Header.js";
import AlbumList from "../components/AlbumList/AlbumList.js";
import AlbumDetail from "../components/AlbumDetail/AlbumDetail.js";
import { useFocus } from "@/hooks/useFocus.js";

const HomePage = () => {
  const [albumCovers, setAlbumCovers] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [focusRef, setFocus] = useFocus();

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
      <AppHeader focusRef={focusRef} />{" "}
      <AlbumList
        albumCovers={albumCovers}
        onAlbumClick={handleAlbumClick}
        setFocus={setFocus}
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
