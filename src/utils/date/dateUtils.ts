export const koreanTimeOffset = 9 * 60 * 60 * 1000; // 9시간

export function getKoreanDate(date: Date): Date {
  return new Date(date.getTime() + koreanTimeOffset);
}

export function formatDate(isoString: string): string {
  if (!isoString) return "";

  const date = new Date(isoString);
  const kstDate = getKoreanDate(date);
  const month = String(kstDate.getMonth() + 1).padStart(2, '0');
  const day = String(kstDate.getDate()).padStart(2, '0');
  return `${kstDate.getFullYear()}.${month}.${day}`;
}

export function formatTime(timestamp: string): string {
  const now = new Date();
  const time = new Date(timestamp);
  const kstTime = getKoreanDate(time);
  const diffMs = now.getTime() - kstTime.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) {
    return `종료 ${diffDays}일`;
  }

  if (diffHours < 1) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else {
    return `${diffDays}일 전`;
  }
}

export function getEventStatus(utcDate: string): string {
  const now = new Date();
  const eventDate = new Date(utcDate);
  const kstEventDate = getKoreanDate(eventDate);

  if (kstEventDate < now) {
    return '종료';
  }

  const diffMs = kstEventDate.getTime() - now.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours <= 24) {
    return '예정';
  }

  return '진행중';
}

export function commentDate(timestamp: string): string {
  const now = getKoreanDate(new Date());
  const time = new Date(timestamp);
  const kstTime = getKoreanDate(time);
  const diffMs = now.getTime() - kstTime.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) {
    return '방금 전';
  } else if (diffHours < 1) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else {
    return `${diffDays}일 전`;
  }
}