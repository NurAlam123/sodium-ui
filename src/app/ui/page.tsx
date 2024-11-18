import Button from "@/components/ui/Button";
import { uiElements } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="h-dvh flex justify-center items-center">
      <div className="flex gap-8 flex-wrap">
        {uiElements.map((uiElement) => (
          <Link href={uiElement.href} key={uiElement.title}>
            <Button>
              {uiElement.title} <ArrowUpRight />
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
