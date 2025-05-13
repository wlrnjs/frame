import React from "react";
import LinkItem from "./LinkItem";

const LinkContainer = () => {
  const items = [
    {
      href: "/photo-list",
      imgSrc: "/BlackPhoto.JPG",
      title: "List",
      description: "See More",
    },
    {
      href: "/write",
      imgSrc: "/City.jpg",
      title: "Write",
      description: "Write Your Photo",
    },
    {
      href: "/support",
      imgSrc: "/Height.JPG",
      title: "Support",
      description: "Need Support?",
    },
  ];

  return (
    <div className="w-full h-[700px] flex-center gap-10 custom-margin layout-container">
      {items.map((item) => (
        <LinkItem
          key={item.href}
          href={item.href}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default LinkContainer;
