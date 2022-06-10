import React from "react";

type Props = {
  className?: string;
};

export const Computer = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    className={className}
    viewBox="0 0 48 48"
    fill="currentColor"
  >
    <path d="M7 36q-1.25 0-2.125-.875T4 33V9q0-1.25.875-2.125T7 6h34q1.25 0 2.125.875T44 9v24q0 1.25-.875 2.125T41 36zm0-3h34V9H7v24zm-3.5 9q-.65 0-1.075-.425Q2 41.15 2 40.5q0-.65.425-1.075Q2.85 39 3.5 39h41q.65 0 1.075.425Q46 39.85 46 40.5q0 .65-.425 1.075Q45.15 42 44.5 42zM7 33V9v24z"></path>
  </svg>
);
