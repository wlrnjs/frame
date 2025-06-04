import UserSearch from "@/admin/components/user/UserSearch";
import UserList from "@/admin/components/user/UserList";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">유저 관리</h1>
      <UserSearch />
      <UserList />
    </div>
  );
};

export default page;
