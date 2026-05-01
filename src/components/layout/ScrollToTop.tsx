import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis takes over native scroll, so window.scrollTo won't work.
    // Instead we use Lenis's global scrollTo if available, falling back
    // to the native API for safety.
    const lenisInstance = (window as any).__lenis;

    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  // NEVER return null — unmounting/remounting the entire tree kills
  // hero images, animations, and component state on every navigation.
  return children;
};

export default ScrollToTop;
