import { FC, SVGProps } from "react";

export const OpenIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.4">
        <path
          d="M19.5 13L12.5 20L5.5 13M19.5 5L12.5 12L5.5 5"
          stroke="#374151"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
