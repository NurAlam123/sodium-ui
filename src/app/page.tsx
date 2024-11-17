import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="h-dvh flex justify-center items-center flex-col gap-4">
      <div className="mb-2">
        <h1 className="text-9xl font-semibold">Sodium UI</h1>
        <p className="text-center text-xl text-gray-300 mt-2 font-light">
          A collection of random UI
        </p>
      </div>
      <button className="flex items-center text-2xl px-6 py-2 bg-sky-500/90 shadow shadow-sky-500 hover:bg-sky-600 rounded-xl font-semibold text-sky-100 gap-2">
        Explore <ArrowUpRight />{" "}
      </button>
    </main>
  );
}
