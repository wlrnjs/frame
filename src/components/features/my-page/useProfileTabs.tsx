import { useState } from "react";

type TabType = "posts" | "liked";

const useProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("posts");

  return {
    activeTab,
    setActiveTab,
  };
};

export default useProfileTabs;
