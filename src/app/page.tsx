import MainAnimation from "@/components/main/MainAnimation";
import LOGO from "@/icon/LOGO";

export default function Home() {
  return (
    <div className="w-full h-screen px-[200px] py-[10px] bg-bg flex flex-col">
      <LOGO />
      <MainAnimation />
    </div>
  );
}
