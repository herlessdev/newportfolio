import cx from "@/libs/cx";
import { useState } from "react";
import CardProject from "./card-project";
import LineXStyle from "@/components/shared/line-x-style";

interface Props {
  id: string;
  dictionary: Portfolio;
}
const Portfolio = ({ id, dictionary }: Props) => {
  const [indexOptSelect, setIndexOptSelect] = useState<number>(0);

  const projects = [
    {
      title: "VCI-LLC",
      href: "https://adrianhates.github.io/vci-llc/",
      tecnology: ["html", "css", "javascript", "react"],
      category: 1,
    },
    {
      title: "Changomon",
      href: "https://adrianhates.github.io/game-simon/",
      tecnology: ["html", "css", "javascript", "react"],
      category: 2,
    },
    {
      title: "Pokemon Emerald",
      href: "https://adrianhates.github.io/newpokemon/",
      tecnology: ["react", "css", "python", "postgresql", "typescript"],
      category: 2,
    },
    {
      title: "Landing-page Web",
      href: "https://adrianhates.github.io/landingpageweb/",
      tecnology: ["react"],
      category: 1,
    },
    {
      title: "Template-home-adidas",
      href: "https://adrianhates.github.io/template-ecommerce/",
      tecnology: ["html", "css", "javascript", "react"],
      category: 1,
    },
    {
      title: "Ecommerce",
      href: "https://tiendavirtualfull.onrender.com/",
      tecnology: ["html", "css", "javascript", "react", "node", "mongo"],
      category: 1,
    },
    {
      title: "Fastest Food",
      href: "https://adrianhates.github.io/fastestfood/",
      tecnology: ["html", "css", "javascript", "jquery"],
      category: 1,
    },
    {
      title: "Game of Life",
      href: "https://adrianhates.github.io/gameoflife/",
      tecnology: ["html", "css", "javascript", "react"],
      category: 3,
    },
    {
      title: "Tres raya",
      href: "https://adrianhates.github.io/tresraya/",
      tecnology: ["html", "css", "javascript", "react"],
      category: 2,
    },
    {
      title: "Tetris",
      href: "https://adrianhates.github.io/Tetris/",
      tecnology: ["html", "css", "javascript", "react"],
      category: 2,
    },
    {
      title: "25 + 5 Clock",
      href: "https://codepen.io/Fade-Out/full/dyKGNJO",
      tecnology: ["html", "css", "javascript", "react"],
      category: 3,
    },
  ];

  return (
    <section id={id} className="text-white pb-[75px] sm:pb-[100px]">
      <h3 className="font-fondamento uppercase tracking-[3.5px] text-xl sm:text-3xl text-center pt-[75px] sm:pt-[100px] pb-[50px] text-sky-blue-200">
        {dictionary?.title}
      </h3>
      <LineXStyle />
      <div className="flex items-center justify-center py-[50px] gap-4 text-sky-blue-200">
        {dictionary?.options &&
          dictionary?.options.map((opt, i) => (
            <div
              key={i}
              className={cx(
                "text-lg sm:text-2xl transition-all duration-300 cursor-pointer hover:text-gold-100",
                i === indexOptSelect ? "text-gold-100" : ""
              )}
              onClick={() => {
                setIndexOptSelect(i);
              }}
            >
              {opt}
            </div>
          ))}
      </div>

      <div className="grid grid-cols[repeat(auto-fit,minmax(250px,250px))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-w-[1280px] justify-items-center mx-auto gap-y-[5rem] gap-x-[1rem] px-[1rem] sm:px-[26px]">
        {projects &&
          projects
            .filter((project) => {
              if (indexOptSelect === 0) {
                return true;
              } else {
                return project?.category === indexOptSelect;
              }
            })
            .map((x, i) => (
              <CardProject
                key={i}
                button={{
                  name: dictionary?.["button-options"]?.name,
                  href: x.href,
                }}
                title={x.title}
                tecnology={x.tecnology}
              />
            ))}
      </div>
      {/*<div id='enlace'>        
          <Enlace href='https://codepen.io/Fade-Out' text={idioma==='ES'?'Mostrar':'Show All'} />
          </div>*/}
    </section>
  );
};

export default Portfolio;
