import React from "react";
import Checkbox from "./Checkbox";

const TermCheckBox = [
  { title: "마케팅 수신 동의" },
  { title: "개인정보 처리 동의" },
  { title: "서비스 이용 약관 동의" },
];

const AgreementCheckbox = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-2 bg-black text-white p-4 rounded-[5px]">
      {TermCheckBox.map((item, index) => (
        <div key={index} id={`term-${index}`}>
          <Checkbox title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default AgreementCheckbox;
