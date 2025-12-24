import React from "react";
import clsx from "clsx";

export const Button = ({ variant = "primary", className, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition border";
  const variants = {
    primary: "bg-blue-700 text-white border-blue-700 hover:opacity-95",
    outline: "bg-white text-blue-800 border-blue-200 hover:bg-blue-50",
    soft: "bg-blue-50 text-blue-900 border-blue-100 hover:bg-blue-100",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};