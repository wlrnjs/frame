import PhotoListClient from "./PhotoListClient";
import { fetchPosts, fetchImages } from "@/service/photo-list/serverApi";

async function Page() {
  const [posts, images] = await Promise.all([fetchPosts(), fetchImages()]);
  const hasError = !posts || !images;

  return (
    <PhotoListClient
      initialPosts={posts}
      initialImages={images}
      error={hasError}
    />
  );
}

export default Page;
