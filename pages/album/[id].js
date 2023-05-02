import { useRouter } from "next/router";
import AlbumDetail from "../../components/AlbumDetail/AlbumDetail";
import curtisAlbum from "../../public/images/curtis.jpeg";
import AppHeader from "@/components/Header/Header";

export default function AlbumDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const album = {
    name: "Curtis Mayfield",
    title: "Curtis (Deluxe Edition)",
    genre: "Funk, Soul",
    year: 1970,
    id: id,
    src: curtisAlbum,
  };

  return (
    <>
      <AppHeader />
      <AlbumDetail album={album}>
        <p>{album.name}</p>
        <p>{album.title}</p>
        <p>{album.genre}</p>
        <p>{album.year}</p>
      </AlbumDetail>
    </>
  );
}
