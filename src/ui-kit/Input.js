import React from "react";
import clsx from "clsx";

export default function Input(props) {
  const { className, label, type = "text", placeholder, required, value, ...rest } = props;
  const classes = clsx(className);

  return (
    <label>
      {label}
      {required && <span className="required">*</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={classes}
        value={value}
        {...rest} 
      />
    </label>
  )
}