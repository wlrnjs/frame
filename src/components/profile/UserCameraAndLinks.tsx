import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

const UserCameraAndLinks = () => {
  const LinkStyle = "text-neutral-400 hover:text-white hover:underline";

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-[18px] font-semibold text-white">Camera Gear</h3>
        <p className="text-neutral-400">Camera: FUJIFILM X100V</p>
        <p className="text-neutral-400">Lens: 23mm f/2</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Connect</h3>
        <Link
          href="https://www.instagram.com/_zuqil/"
          target="_blank"
          rel="noopener noreferrer"
          className={LinkStyle}
        >
          Instagram
        </Link>
        <Link
          href="https://github.com/wlrnjs"
          target="_blank"
          rel="noopener noreferrer"
          className={cn("block", LinkStyle)}
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default UserCameraAndLinks;
