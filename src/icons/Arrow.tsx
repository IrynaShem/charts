import { FC, SVGProps } from "react";

export interface ArrowProps extends SVGProps<SVGSVGElement> {
  variant: "up" | "down";
}

export const Arrow: FC<ArrowProps> = ({ variant, ...props }) => {
  const color = variant === "up" ? "#23A698" : "#FF708B";

  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      rotate={"40deg"}
      fill="none"
      style={{ rotate: variant === "up" ? "180deg" : undefined }}
      {...props}
    >
      <path
        d="M6 7.99998L12 -1.52588e-05H-4.57764e-05L6 7.99998Z"
        fill={color}
      />
    </svg>
  );
};
