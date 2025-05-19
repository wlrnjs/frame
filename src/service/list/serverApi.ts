/**
 * 게시글 목록을 가져오는 함수
 */
export async function fetchPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts`,
      {
        next: { revalidate: 3600 },
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

/**
 * 이미지 목록을 가져오는 함수
 */
export async function fetchImages() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_photos`,
      {
        next: { revalidate: 3600 },
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
