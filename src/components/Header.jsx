import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ContactButton from "../assets/buttons/contactButton";
import Logo from "../assets/icons/logo";
import Navigator from "./Navigator";

const SecondHeroText = () => {
  useGSAP(() => {
    gsap.fromTo('.head',{
      opacity:0,
      y: -10,
      filter: 'blur(10px)'
    },{
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.5,
      delay: 0.5
    })
  }, [])
  return (
    <main>
      <div className="navigator">
        <header className="head py-4 px-8 lg:px-16 flex justify-between items-center w-full absolute">
          <Logo className={"lg:flex lg:flex-grow lg:basis-0 text-white text-[32px] font-extrabold"}/>
          <Navigator className={"hidden lg:flex lg:gap-12"}/>
          <ContactButton/>
        </header>
      </div>
    </main>
  );
};

export default SecondHeroText;
