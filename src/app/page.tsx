import ComponentsCard from "@/components/ComponentsCard";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <section className="border-b py-4">
        <h1 className="text-6xl font-bold text-center text-blue-500">
          Sodium UI
        </h1>
      </section>

      <section className="my-5">
        <article>
          <h2 className="text-3xl font-medium mb-2">Introduction</h2>
          <p>
            Sodium UI is a collection of interactive UI components built with{" "}
            <strong>React</strong>, <strong>Tailwind CSS</strong>,{" "}
            <strong>TypeScript</strong> and <strong>Motion </strong>
            (Formerly Framer Motion){" "}
          </p>
          <p>
            It’s not a component library but rather a personal project where I
            practiced recreating various interactive components I found
            interesting online or on other platforms.{" "}
          </p>
        </article>
      </section>

      <section className="my-5">
        <h2 className="text-3xl font-medium mb-2">Components</h2>
        <div className="grid grid-cols-2 gap-2 auto-cols-max last:*:col-span-2">
          <ComponentsCard href="/carousel" name="Carousel" />
          <ComponentsCard name="Ticker" href="/ticker" />
          <ComponentsCard name="Grid" href="/grid" />
        </div>
      </section>
    </main>
  );
}
