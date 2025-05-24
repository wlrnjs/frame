"use client";

import React, { Suspense } from "react";
import ImageDetailPage from "./ImageDetailPage";

const Page = () => {
  return (
    <Suspense fallback={""}>
      <ImageDetailPage />
    </Suspense>
  );
};

export default Page;
