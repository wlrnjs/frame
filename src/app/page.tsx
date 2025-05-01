import MainAnimation from "@/components/main/MainAnimation";
import SecondSection from "@/components/main/SecondSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-[200px] py-[10px] bg-bg flex flex-col">
      <MainAnimation />
      <SecondSection />
    </div>
  );
}
