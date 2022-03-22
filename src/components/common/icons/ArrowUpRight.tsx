import React from "react";

type Props = {
  className?: string;
};

export const ArrowUpRight = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="M7 17L17 7"></path>
    <path d="M7 7L17 7 17 17"></path>
  </svg>
);
