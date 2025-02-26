import { useNavigate } from "react-router-dom";
import { NavigationItem } from "../../types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "About", value: "about" },
  { label: "Tools", value: "tools" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];

export const useCustomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (value: string) => {
    navigate(`/${value}`);

    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { handleNavigation };
};
