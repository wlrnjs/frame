import { cn } from "@/utils";
import Link from "next/link";
import React from "react";
import { UserDataType } from "@/types/ProfileType";

interface UserCameraAndLinksProps {
  userData: UserDataType;
}

const UserCameraAndLinks = ({ userData }: UserCameraAndLinksProps) => {
  const LinkStyle =
    "text-neutral-400 hover:text-white hover:underline hover:decoration-offset-2 transition-all duration-300 ease-out";

  return (
    <div className={cn("mt-6 grid grid-cols-2 gap-4", "mobile:mt-4")}>
      <div className="text-nowrap">
        <h3
          className={cn("text-lg font-semibold text-white", "mobile:text-base")}
        >
          Camera Gear
        </h3>
        <p className={cn("text-neutral-400", "mobile:text-sm")}>
          Camera: {userData?.camera || "미등록"}
        </p>
        <p className={cn("text-neutral-400", "mobile:text-sm")}>
          Lens: {userData?.lens || "미등록"}
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
