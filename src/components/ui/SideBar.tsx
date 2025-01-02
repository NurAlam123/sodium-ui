import components from "@/constants/components";
import { organizeCategory } from "@/lib/organizeCategory";
import Link from "next/link";

const SideBar = () => {
  const organizedCategory = organizeCategory(components);
  return (
    <aside className="z-[999] fixed border inset-[0_auto_0_0] w-64 bg-zinc-50 rounded-tr-xl rounded-br-xl p-4">
      <h1 className="text-2xl text-blue-500 font-bold mb-2 border-b pb-2">
        Sodium UI
      </h1>
      <nav className="ms-2">
        {Object.keys(organizedCategory).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-semibold text-zinc-700 mb-2">
              {category}
            </h3>
            {organizedCategory[category].map((component) => (
              <div key={component.id.toLowerCase()}>
                <Link
                  key={component.id}
                  href={`/ui/${component.id}`}
                  className="block text-zinc-600 ms-4 text-sm mb-1"
                >
                  {component.id}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
