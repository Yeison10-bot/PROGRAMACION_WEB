import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.button}>
        ↑
      </button>
    )
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "40px",
    width: "40px",
    padding: "10px",
    fontSize: "20px",
    borderRadius: "5px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semitransparente
    color: "#ccc", // gris claro para combinar con fondo
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
    zIndex: 999,
    transition: "opacity 0.3s ease-in-out"
  }
};

export default ScrollToTopButton;
