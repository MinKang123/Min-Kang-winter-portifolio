import React from "react";
import { clsx } from "clsx";

export const Button = ({ href, color = "black", disabled = false, handleClick, children, customClasses, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const colorStyles = {
    black:
      "bg-gray-900 text-white hover:bg-gray-800 active:text-gray-300 focus:ring-gray-500 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
    white:
      "bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100 active:text-gray-700 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-700",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const classes = clsx(baseStyles, colorStyles[color] || colorStyles.black, disabledStyles, customClasses);

  if (href) {
    return (
      <a
        href={disabled ? "#" : href}
        onClick={disabled ? (e) => e.preventDefault() : handleClick}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};
