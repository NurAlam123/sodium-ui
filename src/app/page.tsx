import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-dvh flex justify-center items-center flex-col gap-4 max-w-screen-xl mx-auto">
      <div className="mb-2">
        <h1 className="text-4xl text-center md:text-9xl font-bold">
          Sodium UI
        </h1>
        <p className="text-center text-sm md:text-xl text-gray-600 mt-2 font-light">
          A collection of random UI
        </p>
      </div>
      <Link href="/ui">
        <Button>
          Explore <ArrowUpRight />
        </Button>
      </Link>
    </main>
  );
}
