import React from "react";
import Image from "next/image";

const PostGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="Sunset in the Mountains"
          width={120}
          height={48}
          className="object-cover"
        />
        <p className="p-2 text-center text-black">Sunset in the Mountains</p>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="City at Night"
          width={120}
          height={48}
          className="object-cover"
        />
        <p className="p-2 text-center text-black">City at Night</p>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="Portrait in Nature"
          width={120}
          height={48}
          className="object-cover"
        />
        <p className="p-2 text-center text-black">Portrait in Nature</p>
      </div>
    </div>
  );
};

export default PostGrid;
