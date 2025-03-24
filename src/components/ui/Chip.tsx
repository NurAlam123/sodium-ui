import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const Chip: React.FC<{ cid: string }> = ({ cid }) => {
  const copyToCilpboard = () => {
    const host = window.location;
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(`${host}/#${cid}`);
    toast("Copied!", {
      icon: <Copy />,
    });
  };

  return (
    <div
      className="z-[99] absolute m-6 rounded-full bg-neutral-700 p-2 size-12 flex justify-center items-center shadow-lg hover:bg-neutral-600 hover:scale-95 active:scale-90 transition cursor-pointer"
      onClick={copyToCilpboard}
    >
      <p id={cid} className="font-medium text-white text-xl">
        {cid.padStart(2, "0")}
      </p>
    </div>
  );
};

export default Chip;
