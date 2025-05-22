import React from "react";
import UserProfileHeader from "../profile/UserProfileHeader";
import UserCameraAndLinks from "../profile/UserCameraAndLinks";
import { cn } from "@/utils";
import { UserDataType } from "@/types/ProfileType";
import ProfileEditButton from "./ProfileEditButton";

interface ProfileSectionProps {
  userData: UserDataType;
  onEditClick: () => void;
}

// 프로필 섹션 컴포넌트
const ProfileSection = ({ userData, onEditClick }: ProfileSectionProps) => (
  <div
    className={cn(
      "relative bg-black rounded-lg shadow-lg p-6 mb-6",
      "mobile:p-4"
    )}
  >
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <UserProfileHeader isMyPage userData={userData} />
        <UserCameraAndLinks />
      </div>
      <ProfileEditButton onClick={onEditClick} />
    </div>
  </div>
);

export default ProfileSection;
