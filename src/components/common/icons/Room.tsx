import React from "react";

type Props = {
  className?: string;
};

export const Room = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    className={className}
    viewBox="0 0 48 48"
    fill="currentColor"
  >
    <path d="M8 42V18L24 6l16 12v24zm3.5-3.5h15v-7h-15zm18 0h7v-7h-7zm-18-10h7v-7h-7zm10 0h15v-7h-15zm-8.4-9.95h21.8L24 10.35z"></path>
  </svg>
);
