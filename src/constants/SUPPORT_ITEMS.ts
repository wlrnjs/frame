import { SupportItem } from "@/types/Support";

export const SUPPORT_ITEMS: SupportItem[] = [
  { title: "공지사항", href: "/support/notices" },
  { title: "개선 요청", href: "/support/feedback" },
  { title: "이용약관", isModal: true, modalKey: "terms" },
  { title: "개인정보처리방침", isModal: true, modalKey: "privacy" },
  { title: "1:1 문의하기", isModal: true, modalKey: "inquiry" },
];