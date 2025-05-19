import PhotoListClient from "./PhotoListClient";

export interface ImgListType {
  id: string;
  image_url: string;
  posts_id: number;
}

export interface ListItemType {
  camera_info: string;
  category: string;
  created_at: string;
  description: string;
  id: number;
  img_url: string;
  location: string;
  post_id: number;
  title: string;
  user_id: string;
  nickname: string;
}

// 서버에서 직접 데이터를 가져오는 함수
async function getPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts`,
      {
        next: { revalidate: 60 },
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
          Authorization: `Bearer ${
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
          }`,
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch posts");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

async function getImages() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_photos`,
      {
        next: { revalidate: 6000 },
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
          Authorization: `Bearer ${
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
          }`,
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch images");
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    return null;
  }
}

async function Page() {
  // 서버에서 데이터 가져오기
  const [posts, images] = await Promise.all([getPosts(), getImages()]);
  const hasError = !posts || !images;

  // 클라이언트 컴포넌트에 데이터 전달
  return (
    <PhotoListClient
      initialPosts={posts}
      initialImages={images}
      error={hasError}
    />
  );
}

export default Page;
