import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="h-dvh flex justify-center items-center">
      <div>
        <Button>
          <Link href="/ui/logo-scroller" className="flex items-center gap-4">
            Logo Scroller <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
