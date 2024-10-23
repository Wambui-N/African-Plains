import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  buttonStyle: string;
  title: string;
  icon?: JSX.Element;
};


const Button = ({ href, buttonStyle, title, icon }: ButtonProps) => {
  const buttonContent = (
    <>
      {title}
      {icon && <span className="ml-2">{icon}</span>} {/* Add margin-right to the icon */}
    </>
  );

  return href ? (
    <Link
      href={href}
      className={clsx(`${buttonStyle} inline-flex px-6 py-2 items-center font-semibold text-lg cursor-pointer`)}
    >
      {buttonContent}
    </Link>
  ) : (
    <button type='submit' className={clsx(`${buttonStyle} inline-flex px-6 py-2 items-center font-semibold text-lg cursor-pointer`)}>
      {buttonContent}
    </button>
  );
};

export default Button;
