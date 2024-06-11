'use client'

import { BiError } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="text-error flex gap-2 items-center h-full">
      <span className="text-[25px]"><BiError /></span>
      <span>Something went wrong. Please refresh the page.</span>
    </div>
  );
};

export default NotFoundPage;