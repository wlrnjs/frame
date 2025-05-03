import React from "react";
import Image from "next/image";

const LikedImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="Ocean Breeze"
          width={120}
          height={48}
          className="object-cover"
        />
        <p className="p-2 text-center text-black">Ocean Breeze</p>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="Golden Hour"
          width={120}
          height={48}
          className="object-cover"
        />
        <p className="p-2 text-center text-black">Golden Hour</p>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="Foggy Forest"
          width={120}
          height={48}
          className="object-cover"
        />
        <p className="p-2 text-center text-black">Foggy Forest</p>
      </div>
    </div>
  );
};

export default LikedImageGrid;
