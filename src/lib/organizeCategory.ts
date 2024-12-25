import { ComponentType } from "@/constants/components";

type SortedComponents = {
  [key: string]: [ComponentType];
};

export function organizeCategory(
  components: ComponentType[],
): SortedComponents {
  const sorted: SortedComponents = {};
  for (const component of components) {
    const categoryName = component.category;
    if (!Object.hasOwn(sorted, categoryName))
      sorted[categoryName] = [component];
    else sorted[categoryName].push(component);
  }
  return sorted;
}
