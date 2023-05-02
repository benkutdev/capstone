import { useRouter } from "next/router";
import AlbumDetail from "../../components/AlbumDetail/AlbumDetail";
import curtisAlbum from "../../public/images/curtis.jpeg";

export default function AlbumDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const album = { id: id, src: curtisAlbum };

  return (
    <AlbumDetail album={album}>
      <h1>Album Details for {id}</h1>
    </AlbumDetail>
  );
}
