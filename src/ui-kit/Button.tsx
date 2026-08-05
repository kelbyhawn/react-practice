import React from "react";
import clsx from "clsx";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = clsx("btn", className);

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
