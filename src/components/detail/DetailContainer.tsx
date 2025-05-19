import DeleteIcon from "@/icon/Delete";
import Download from "@/icon/Download";
import EditIcon from "@/icon/Edit";
import { HeartOutline } from "@/icon/Heart";
import Share from "@/icon/Share";
import Link from "next/link";
import React from "react";

const ActionButton = [
  { icon: <HeartOutline />, label: "좋아요", aria: "좋아요" },
  { icon: <Download />, label: "다운로드", aria: "다운로드" },
  { icon: <Share />, label: "공유하기", aria: "공유" },
  { icon: <EditIcon />, label: "수정하기", aria: "수정" },
];

const DetailContainer = () => {
  return (
    <div className="max-w-full min-w-[380px] h-[720px] bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[110px]">
      {/* 이미지 및 액션 */}
      <div className="flex flex-col gap-3 justify-between items-start">
        <div className="flex space-x-4">
          {ActionButton.map((action, index) => (
            <div key={index} className="relative group">
              <button aria-label={action.aria}>{action.icon}</button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {action.label}
              </div>
            </div>
          ))}
          {/* 삭제 버튼 */}
          <div className="relative group">
            <button aria-label="삭제">
              <DeleteIcon />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              삭제하기
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">타이틀입니다.</h1>
          <p className="text-sm text-gray-400">간단한 설명입니다.</p>
        </div>
      </div>

      {/* 작성자 정보 */}
      <div className="flex flex-col gap-2 items-start justify-between border-t border-gray-700 pt-4 text-sm">
        <p>
          작성자:
          <Link href={"/user-profile"}>
            <span className="text-gray-300 hover:underline decoration-offset-4 pointer">
              wlrnjs
            </span>
          </Link>
        </p>
        <p>
          업로드: <span className="text-gray-300">2025.05.03</span>
        </p>
        <p>
          장소: <span className="text-gray-300">서울, 한국</span>
        </p>
      </div>

      {/* 추가 정보 */}
      <div className="flex flex-col gap-4 text-sm text-gray-300">
        <p>
          <span className="font-semibold text-white">카테고리:</span> 풍경
        </p>
        <p>
          <span className="font-semibold text-white">조회수:</span> 123회
        </p>
        <p>
          <span className="font-semibold text-white">카메라 정보:</span> Canon
          EOS R6, 50mm
        </p>
      </div>
    </div>
  );
};

export default DetailContainer;
