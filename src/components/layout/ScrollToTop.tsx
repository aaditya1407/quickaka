import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    // wait one frame so scroll completes
    requestAnimationFrame(() => {
      setReady(true);
    });
  }, [pathname]);

  return ready ? children : null;
};

export default ScrollToTop;