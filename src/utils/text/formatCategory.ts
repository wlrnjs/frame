// 카테고리 문자열을 JSON 배열로 변환하고, 맨 앞의 # 제거

export const formatCategory = (rawCategory: string): string => {
  try {
    const parsed = JSON.parse(rawCategory);
    if (Array.isArray(parsed)) {
      return parsed
        .map((cat: string) => cat.replace(/^#/, ""))
        .join(", ");
    }
    return rawCategory;
  } catch {
    return rawCategory;
  }
};