import React from "react";

const EventItem = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <p className="w-[200px]">Event Name</p>
      <p className="w-[200px]">Event Start Date</p>
      <p className="w-[200px]">Event End Date</p>
      <p className="w-[200px]">Event Status</p>
      <p className="w-[200px]">Event Edit</p>
    </div>
  );
};

export default EventItem;
