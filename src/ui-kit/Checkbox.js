import React from "react";
import clsx from "clsx";

export default function Checkbox({
  className,
  type = "checkbox",
  value,
  ...rest
}) {
  const classes = clsx(className);

  return (
    <>
      <label>
        <input type={type} value={value} className={classes} {...rest} />
        {value}
      </label>
    </>
  );
}
