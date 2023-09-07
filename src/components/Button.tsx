import * as React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "primary";
}
function Button(props: ButtonProps) {
  const { className, variant = "primary", ...otherProps } = props;

  const variantProps = {
    text: "hover:shadow-md hover:bg-neutral-50 text-neutral-400  ",
    primary:
      "hover:shadow hover:shadow-neutral-700 text-white bg-sky-600 hover:bg-sky-700 ",
  };
  return (
    <button
      type="button"
      className={`py-2  px-3 min-w-[120px]  disabled:bg-neutral-500 text-sm  rounded ${variantProps[variant]} ${className}`}
      {...otherProps}
    />
  );
}

Button.displayName = "button";

export default Button;
