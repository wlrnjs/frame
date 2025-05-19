import React from "react";

const ErrorBox = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[200px] h-[200px] bg-black rounded-[5px] text-white">
        <p className="text-center">
          에러가 발생했습니다. <br /> 다시 시도해주세요.
        </p>
      </div>
    </div>
  );
};

export default ErrorBox;
