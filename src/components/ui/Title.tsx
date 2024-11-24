import clsx from "clsx";

type TitleProps = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: TitleProps) => {
  return (
    <h1
      className={clsx(
        "text-xl md:text-3xl font-medium text-zinc-700 my-6 text-center bg-zinc-50 w-fit mx-auto px-6 py-4 rounded-xl",
        className,
      )}
    >
      &lt; {title} /&gt;
    </h1>
  );
};

export default Title;
