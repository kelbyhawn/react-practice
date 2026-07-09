import React from "react";
import clsx from "clsx";

export default function Button({ className, children, ...rest }) {
  const classes = clsx("btn", className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
