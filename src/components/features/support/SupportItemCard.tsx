import { SupportItem } from "@/types/Support";
import { cn } from "@/utils";
import Link from "next/link";

// 컴포넌트 분리
interface SupportItemCardProps {
  item: SupportItem;
  onModalOpen: (modalKey: SupportItem["modalKey"]) => void;
}

const SupportItemCard = ({ item, onModalOpen }: SupportItemCardProps) => {
  const handleClick = () => {
    if (item.modalKey) {
      onModalOpen(item.modalKey);
    }
  };

  const cardContent = <p className="text-lg font-semibold">{item.title}</p>;

  const cardClassName =
    "w-full text-left border rounded-xl px-5 py-6 hover:bg-gray-50 transition duration-300 ease-out";

  if (item.isModal) {
    return (
      <button
        onClick={handleClick}
        className={cardClassName}
        type="button"
        aria-label={`${item.title} 열기`}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <Link
      href={item.href!}
      aria-label={item.title}
      className={cn(cardClassName, "pointer block")}
    >
      {cardContent}
    </Link>
  );
};

export default SupportItemCard;
