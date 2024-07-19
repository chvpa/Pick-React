import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

const SecondHeroText = () => {
  useEffect(() => {
    const split = new SplitType(".second-hero-text", {
      types: "chars,lines,words",
    });
    const chars = split.chars;

    gsap.from(chars, {
      y: 100,
      delay: .6,
      duration: 1.5,
      ease: "back.inOut",
    });
  }, []);

  return (
    <main>
      <h2 className="second-hero-text text-white font-medium lg:text-center lg:max-w-[600px] pt-8 text-sm md:text-base lg:p-8">
        Con una pasión por el diseño y la tecnología, transformamos ideas en
        sitios web elegantes y efectivos que destacan en el competitivo entorno
        digital.
      </h2>
    </main>
  );
};

export default SecondHeroText;
