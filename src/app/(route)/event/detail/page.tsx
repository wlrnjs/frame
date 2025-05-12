import CommentContainer from "@/components/detail/CommentContainer";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="relative w-full h-[500px]">
        <Image src="/IMG_7115.JPG" alt="Event Detail" fill />
      </div>
      <div className="flex flex-col gap-4 bg-black text-white p-20">
        <h2 className="text-3xl">이벤트 이름</h2>
        <div className="flex gap-2">
          <p>진행중</p>
          <p>10분 전</p>
          <p>조회수 4</p>
          <p>댓글 0</p>
          <p>추천 0</p>
          <p>작성자 김철수</p>
        </div>
        <hr />
        <section className="text-lg tracking-[-0.02em]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptas distinctio necessitatibus alias ab iste
            quisquam debitis voluptate consectetur. Nisi quaerat necessitatibus,
            minus reiciendis corrupti animi sunt corporis consequuntur expedita
            ducimus officia ipsam doloribus debitis, assumenda eaque. Nam
            aliquid eligendi fugiat nulla corporis, modi magni. Ad ipsam culpa
            harum expedita ipsum ipsa doloremque totam soluta? Tempora
            praesentium illo ducimus sunt, saepe a accusantium ea sint labore.
            Mollitia natus cumque facilis ex aliquid sint consequuntur,
            temporibus nulla rem culpa id velit. Ullam similique accusantium
            obcaecati distinctio assumenda sint perspiciatis odit exercitationem
            a dignissimos vitae, soluta molestias quibusdam nobis officia natus!
            Atque?
          </p>
        </section>
        <button className="w-full h-[50px] bg-white text-black rounded-[5px] my-4">
          이벤트 참여하기
        </button>
      </div>
      <div className="bg-black text-white px-20 pb-20 flex flex-col gap-4">
        <h1 className="text-2xl mb-4 flex gap-2 items-center">
          댓글<span className="text-gray-500 text-lg">총 3개</span>
        </h1>
        <CommentContainer isEvent={true} />
      </div>
    </div>
  );
};

export default page;
