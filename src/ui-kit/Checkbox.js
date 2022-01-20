import React from "react";
import clsx from "clsx";

export default function Checkbox(props) {
  const { className, type = "checkbox", value, ...rest } = props;
  const classes = clsx(className);

  return (
    <>
      <label>
        <input
          type={type}
          value={value}
          className={classes}
          {...rest} 
        />
        {value}
      </label>
    </>
  )
}