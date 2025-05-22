"use client";

import React, { Suspense } from "react";
import EventDetailPage from "@/components/features/event/EventDetailPage";

// 로딩 컴포넌트 (임시)
const LoadingSpinner = () => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <EventDetailPage />
    </Suspense>
  );
};

export default Page;
