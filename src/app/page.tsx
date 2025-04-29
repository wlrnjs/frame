import { cn } from "@/utils";

export default function Home() {
  return (
    <div>
      <p className={cn("font-bold tracking-[-0.06em] text-bg", "mx-20")}>
        메인페이지입니다
      </p>
      <p className="font-bold tracking-[-0.04em] text-bgSub">
        메인페이지입니다
      </p>
      <p className="font-bold tracking-[-0.02em] text-main">메인페이지입니다</p>
      <p className="font-bold text-sub">메인페이지입니다</p>
      <p className="font-bold text-point">메인페이지입니다</p>
      <p className="font-bold text-action">메인페이지입니다</p>
    </div>
  );
}
