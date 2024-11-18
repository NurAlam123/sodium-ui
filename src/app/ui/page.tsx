import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="h-dvh flex justify-center items-center">
      <div>
        <Link href="/ui/logo-ticker">
          <Button>
            Logo Ticker <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
