import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-dvh flex justify-center items-center flex-col gap-4">
      <div className="mb-2">
        <h1 className="text-9xl font-semibold">Sodium UI</h1>
        <p className="text-center text-xl text-gray-300 mt-2 font-light">
          A collection of random UI
        </p>
      </div>
      <Button>
        <Link href="/ui" className="flex items-center gap-4">
          Explore <ArrowUpRight />
        </Link>
      </Button>
    </main>
  );
}
