import Link from "next/link";
import React from "react";

interface buttonProps {
  text: string;
  style: string;
  href: string;
  onClick?: () => void;
}

const Button = ({ text, style, href, onClick }: buttonProps) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`${style} md:px-8 px-4 md:py-2 py-1 uppercase lg:text-sm text-xs text-brown font-semibold shadow-sm`}
    >
      {text}
    </Link>
  );
};

export default Button;
