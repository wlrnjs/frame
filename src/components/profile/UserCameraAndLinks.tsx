import React from "react";

const UserCameraAndLinks = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-semibold text-white">Camera Gear</h3>
        <p className="text-neutral-400">Camera: FujiFilm</p>
        <p className="text-neutral-400">Lens: 23.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Connect</h3>
        <a
          href="https://instagram.com/mockuser"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://mockuser.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline block"
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default UserCameraAndLinks;
