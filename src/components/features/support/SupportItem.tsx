import { formatDate } from "@/utils/date/dateUtils";
import React from "react";
import { SupportItemType } from "@/types/Support";

interface SupportItemProps {
  data: SupportItemType;
  toggleOpen: (id: number) => void;
  openId: number | null;
}

const SupportItem = ({ data, toggleOpen, openId }: SupportItemProps) => {
  return (
    <li key={data.id}>
      <button
        onClick={() => toggleOpen(data.id)}
        className="w-full text-left border rounded-xl p-4 hover:bg-gray-50 transition"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{data.title}</span>
          <span className="text-sm text-gray-500">
            {formatDate(data.created_at)}
          </span>
        </div>

        {/* 본문 드롭다운 */}
        {openId === data.id && (
          <div className="mt-4 text-sm whitespace-pre-wrap text-gray-700">
            {data.content}
          </div>
        )}
      </button>
    </li>
  );
};

export default SupportItem;
