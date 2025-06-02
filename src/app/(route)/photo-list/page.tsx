import PhotoListClient from "./PhotoListClient";
import { fetchPosts } from "@/service/photo-list/serverApi";

async function Page() {
  const posts = await fetchPosts();
  const hasError = !posts;

  return <PhotoListClient initialPosts={posts} error={hasError} />;
}

export default Page;
