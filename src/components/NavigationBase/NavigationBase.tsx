import { NavigationItem } from "../../types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "About", value: "about" },
  { label: "Tools", value: "tools" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];

export const handleNavigation = (value: string) => {
  const element = document.getElementById(value);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
