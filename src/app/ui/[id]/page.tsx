import { getComponent } from "@/lib/getComponent";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const Component = getComponent(id);

  return <div>{Component ? <Component /> : "Component not found"}</div>;
}
