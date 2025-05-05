import MainAnimation from "@/components/main/MainAnimation";
import SecondSection from "@/components/main/SecondSection";
import ThirdSection from "@/components/main/ThirdSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-[200px] py-[10px] bg-bg flex flex-col">
      <MainAnimation />
      <SecondSection />
      <ThirdSection />
      <SecondSection />
    </div>
  );
}
