import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollTotop() {
  const [isVisable, setIsVisible] = useState(false);

  const toogleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);

    return () => {
      window.removeEventListener("scroll", toogleVisibility);
    };
  }, []);

  return (
    <div
      className={
        isVisable ? "scrolltotop__container" : "scrolltotop__container-off"
      }
    >
      <button
        className="scrolltotop__button-container"
        type="button"
        onClick={scrollToTop}
      >
        <img
          src={require("../../assets/scrolltotop-icon.png")}
          alt="Seta indicando scroll para o topo"
        />
      </button>
    </div>
  );
}
