import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { className, children, ...rest } = props;
  const classes = clsx("btn", className)

  return <button className={classes} {...rest}>{children}</button>
}