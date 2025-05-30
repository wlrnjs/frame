"use client";

import React, { useState } from "react";
import Image from "next/image";
import Close from "@/icon/Close";
import { useToast } from "@/hooks/ui/useToast";
import { cn } from "@/utils";

const AddPhotoContainer = ({
  images,
  setImages,
}: {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const toast = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // JPG 파일만 허용
    const invalidFiles = selectedFiles.filter((file) => {
      const fileExtension = file.name.toLowerCase().split(".").pop();
      return fileExtension !== "jpg" && fileExtension !== "jpeg";
    });

    if (invalidFiles.length > 0) {
      toast.error("JPG 파일만 업로드 가능합니다.");
      return;
    }

    // 이미지 이름이 중복된 파일이 있는지 확인
    const existingFilenames = new Set(images.map((file) => file.name));
    const newFilenames = new Set(selectedFiles.map((file) => file.name));

    // 파일 이름이 중복된 파일이 있는지 확인
    const duplicates = Array.from(newFilenames).filter((filename) =>
      existingFilenames.has(filename)
    );

    if (duplicates.length > 0) {
      toast.error(`동일한 파일이 있습니다: ${duplicates.join(", ")}`);
      return;
    }

    if (images.length + selectedFiles.length > 5) {
      toast.error("이미지는 최대 5장까지만 업로드 가능합니다.");
      return;
    }

    // 이미지 추가
    setImages([...images, ...selectedFiles]);
    e.target.value = "";
  };

  // 이미지 삭제
  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div
      className={cn(
        "w-full h-[720px] flex flex-col items-center gap-2",
        "mobile:h-fit"
      )}
    >
      <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-md">
        <Image
          src={
            images.length > 0
              ? URL.createObjectURL(images[activeImageIndex])
              : "/BlackPhoto.JPG"
          }
          alt="info-img"
          fill
          priority
          className="object-contain p-5"
        />
      </div>
      <div
        className={cn(
          "w-full h-[180px] bg-black rounded-[5px] p-3 flex items-center justify-start gap-3 overflow-x-auto",
          "mobile:h-[80px]"
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative w-[75px] h-[75px] rounded-md overflow-hidden cursor-pointer",
              activeImageIndex === index
                ? "border-2 border-yellow-400"
                : "border border-white",
              "mobile:w-[50px] mobile:h-[50px]"
            )}
            onClick={() => {
              setActiveImageIndex(index);
            }}
          >
            <Image
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              fill
              className="object-cover"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-[2px] right-[2px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              <Close size="4" />
            </button>
          </div>
        ))}
        {images.length < 5 && (
          <label
            htmlFor="image-upload"
            className={cn(
              "w-[75px] h-[75px] rounded-md border border-white flex-center text-xl text-white font-light border-custom-dotted pointer select-none",
              "mobile:w-[50px] mobile:h-[50px]"
            )}
          >
            <p>+</p>
          </label>
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default AddPhotoContainer;
