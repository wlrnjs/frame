export interface SupportItem {
  title: string;
  href?: string;
  isModal?: boolean;
  modalKey?: "terms" | "privacy" | "inquiry";
}

export type SupportItemType = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};