import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AlbumDetail from "../../components/AlbumDetail/AlbumDetail.js";
import AlbumList from "../../components/AlbumList/AlbumList.js";
import AppHeader from "../../components/Header/Header.js";

export default function AlbumDetailPage({
  albumCovers,
  onAddToCollection,
  onDeleteFromCollection,
}) {
  const router = useRouter();
  const { id } = router.query;
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await fetch(`/api/releases/${id}`);
        const data = await response.json();

        if (response.ok) {
          const albumData = {
            id: data.id,
            name: data.artists[0].name,
            title: data.title,
            genre: data.genres[0],
            year: data.year,
            src: data.images[0].resource_url,
          };

          setAlbum(albumData);
        } else {
          console.error("Failed to fetch album data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    }

    if (id) {
      fetchAlbum();
    }
  }, [id]);

  return (
    <>
      <AppHeader />
      {album ? (
        <AlbumDetail
          album={album}
          onAdd={onAddToCollection}
          albumCovers={albumCovers}
          onDelete={onDeleteFromCollection}
        />
      ) : (
        <p>Loading album...</p>
      )}
    </>
  );
}
