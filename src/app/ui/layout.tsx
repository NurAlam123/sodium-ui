import SideBar from "@/components/ui/SideBar";

export default function UILayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SideBar />
      <main className="ml-60">{children}</main>
    </>
  );
}
