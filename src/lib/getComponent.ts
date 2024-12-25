import components from "@/constants/components";

export function getComponent(id: string) {
  const component = components.filter((component) => component.id === id)[0];
  return component ? component.component : null;
}
