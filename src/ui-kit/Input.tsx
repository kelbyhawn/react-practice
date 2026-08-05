import clsx from "clsx";

type InputProps = {
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
};

export default function Input({
  className,
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  autoFocus,
  ...rest
}: InputProps) {
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
        onChange={onChange}
        autoFocus={autoFocus}
        {...rest}
      />
    </label>
  );
}
