import clsx from "clsx";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={clsx(
        "flex items-center text-2xl px-6 py-2 bg-sky-500/90 shadow shadow-sky-500 hover:bg-sky-600 rounded-xl font-semibold text-sky-100 gap-2",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
