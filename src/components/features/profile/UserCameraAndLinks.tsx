import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

const UserCameraAndLinks = () => {
  const LinkStyle =
    "text-neutral-400 hover:text-white hover:underline hover:decoration-offset-2 transition-all duration-300 ease-out";

  return (
    <div className={cn("mt-6 grid grid-cols-2 gap-4", "mobile:mt-4")}>
      <div>
        <h3
          className={cn("text-lg font-semibold text-white", "mobile:text-base")}
        >
          Camera Gear
        </h3>
        <p className={cn("text-neutral-400", "mobile:text-sm")}>
          Camera: FUJIFILM X100V
        </p>
        <p className={cn("text-neutral-400", "mobile:text-sm")}>
          Lens: 23mm f/2
        </p>
      </div>
      <div>
        <h3
          className={cn("text-lg font-semibold text-white", "mobile:text-base")}
        >
          Connect
        </h3>
        <Link
          href="https://www.instagram.com/_zuqil/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(LinkStyle, "mobile:text-sm")}
          aria-label="Instagram"
        >
          Instagram
        </Link>
        <Link
          href="https://github.com/wlrnjs"
          target="_blank"
          rel="noopener noreferrer"
          className={cn("block", LinkStyle, "mobile:text-sm")}
          aria-label="Github"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default UserCameraAndLinks;
