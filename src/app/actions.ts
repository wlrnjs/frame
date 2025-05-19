// 서버 액션
"use server";

import { revalidatePath } from "next/cache";

export async function revalidatePhotoList() {
  revalidatePath("/photo-list");
}