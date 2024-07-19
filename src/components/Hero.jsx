import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";
import SecondHeroText from "./secondHeadingHero";


const HeroText = () => {
  useEffect(() => {
    const split = new SplitType(".hero-text", { types: 'chars,lines,words'});
    const chars = split.chars;

    gsap.from(
      chars,
      {
        y: 100,
        stagger: 0.02,
        delay: 0.3,
        duration: 0.7,
        ease: 'back.inOut'
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <main>
      <section
      className="
      px-6 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 h-screen flex flex-col justify-center lg:items-center"
    >
      <h1
        className="
        hero-text leading-none text-7xl lg:text-[90px] lg:text-center text-white font-medium pt-12"
      > 
        Agencia de desarrollo de productos digitales.
      </h1>
      <SecondHeroText/>
    </section>
    </main>
  );
};

export default HeroText;
