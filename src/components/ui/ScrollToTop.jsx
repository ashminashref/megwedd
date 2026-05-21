import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to jump to the top left (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the URL changes

  return null;
};

export default ScrollToTop;