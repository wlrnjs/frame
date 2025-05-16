// 날짜 변환 로직 (KST 기준)

export const formatDate = (isoString: string): string => {
  if (!isoString) return "";

  const date = new Date(isoString);
  const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const month = String(kstDate.getMonth() + 1).padStart(2, '0');
  const day = String(kstDate.getDate()).padStart(2, '0');
  return `${kstDate.getFullYear()}.${month}.${day}`;
};
