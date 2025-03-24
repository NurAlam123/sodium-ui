import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ComponentsCard = ({ href, name }: { href: string; name: string }) => {
  return (
    <div className="bg-gray-50 border rounded-lg p-2 h-[14rem] shadow-sm hover:bg-gray-100 hover:border-stone-100 transition-all cursor-pointer">
      {/* <div className="h-3/4 mb-2"></div> */}
      <Link
        href={href}
        className="text-xl flex justify-center items-center h-full font-medium gap-2 group"
      >
        {name}{" "}
        <ArrowRight className="group-hover:ml-4 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ComponentsCard;
