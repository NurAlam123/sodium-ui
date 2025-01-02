import SideBar from "@/components/ui/SideBar";

export default function UILayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SideBar />
      <main className="ml-64 p-12">{children}</main>
    </>
  );
}
