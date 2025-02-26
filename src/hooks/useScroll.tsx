import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export const useScroll = ({ sectionIds, offset = 100 }: ScrollSpyOptions) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = 0; i < sectionIds.length; i++) {
        const sectionId = sectionIds[i];
        const section = document.getElementById(sectionId);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const currentPath = `/${sectionId}`;
          if (location.pathname !== currentPath) {
            navigate(currentPath, {
              replace: true,
              state: { scrollUpdate: true },
            });
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, navigate, location.pathname, offset]);
};
