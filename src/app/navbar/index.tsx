import { useEffect, useState } from "react";
import cx from "../../libs/cx";
import ModalNavbar from "./modal-navbar";
import useToggle from "@/hooks/usetoggle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./index.css";
import { fadeInFromXY } from "@/animations";

interface Props {
  dictionary: Navbar;
}

const Navbar = ({ dictionary }: Props) => {
  const { isOpen, onToggle, onClose } = useToggle();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { ref: navbarRef, inView: navbarInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
    const sections = dictionary?.options.map((opt) =>
      document.getElementById(opt.name.toLowerCase())
    );

    sections?.forEach((section) => {
      if (section) {
        const sectionTop = section?.offsetTop - 10;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dictionary?.options, scrollPosition]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={cx(
          "bg-[transparent] backdrop-blur-sm flex justify-end items-center px-16 py-[1rem] fixed top-0 z-[9999] w-full max-w-[3840px]",
          scrollPosition > 50
            ? "bg-[#081F2D] bg-opacity-40 py-[1rem] transition-all"
            : ""
        )}
      >
        <button
          className="text-[black] lg:hidden block"
          onClick={() => {
            onToggle();
          }}
        >
          <img src={"/icons/miscellanea/toggle.svg"} className="w-6 h-6" />
        </button>

        <ul className="sm:flex hidden gap-[18px] items-center justify-center text-[15.5px] text-white">
          {dictionary?.options.map((opt, i) => (
            <li
              key={i}
              className={cx(
                "hover:text-[#d93] hover:font-bold transition-all duration-300 font-extralight text-center lg:block hidden relative",
                activeSection === opt.name.toLowerCase()
                  ? "text-[#d93] font-bold"
                  : ""
              )}
            >
              <motion.div
                variants={fadeInFromXY(0, -100, 0)}
                initial="initial"
                animate={navbarInView ? "animate" : "initial"}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href={"#" + opt.name.toLowerCase()}>
                  <p className="font-bold opacity-0">{opt.name}</p>
                  <p className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-full">
                    {opt.name}
                  </p>
                </a>
              </motion.div>
              <motion.div
                variants={fadeInFromXY(0, -100, 0)}
                initial="initial"
                animate={navbarInView ? "animate" : "initial"}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cx(
                  "bg-quaternary fade-in-from-left h-[2px] absolute top-100 left-0",
                  activeSection === opt.name.toLowerCase() ? "w-full" : "w-0"
                )}
              />
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <ModalNavbar onClick={onClose} options={dictionary?.options} />
      )}
    </>
  );
};

export default Navbar;
