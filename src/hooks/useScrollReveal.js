import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Offset slightly so it triggers before bottom
      },
    );

    const elements = document.querySelectorAll(".fade-in, .text-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]); // Re-run when route changes
};

export default useScrollReveal;
