import React from "react";
import clsx from "clsx";

type CheckboxProps = {
  className?: string;
  type?: string;
  value?: string;
};

export default function Checkbox({
  className,
  type = "checkbox",
  value,
  ...rest
}: CheckboxProps) {
  const classes = clsx(className);

  return (
    <label>
      <input type={type} value={value} className={classes} {...rest} />
      {value}
    </label>
  );
}
