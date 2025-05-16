// 상세페이지 시간 포맷

export function formatTime(timestamp: string) {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now.getTime() - time.getTime(); // 현재 - 기준 시간 (ms)
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) {
    // 종료일
    return `종료 ${diffDays}일`;
  }

  if (diffHours < 24) {
    // 진행중
    return `${diffMinutes}분 전`;
  } else {
    // 종료
    return `${diffDays}일 전`;
  }
}