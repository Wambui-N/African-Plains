import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  buttonStyle: string;
  title: string;
  href: string;
}

const Button = ({ href, buttonStyle, title }: ButtonProps) => {
  return (
    <div>
      <Link href={href} passHref>
        <button className={clsx(`${buttonStyle} px-6 py-2 rounded-sm font-semibold uppercase`)}>
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
