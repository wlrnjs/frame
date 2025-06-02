/**
 * 게시글 목록을 가져오는 함수
 */
export async function fetchPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts?select=*&order=created_at.desc`,
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