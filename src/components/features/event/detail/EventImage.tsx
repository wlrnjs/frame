import { cn } from "@/utils";
import React from "react";
import Image from "next/image";

const EventImage = ({ imageUrl }: { imageUrl: string }) => (
  <div className={cn("relative w-full h-[500px]", "mobile:h-[240px]")}>
    <Image
      src={imageUrl}
      alt="Event Detail"
      fill
      priority
      className="object-cover"
    />
  </div>
);

export default EventImage;
