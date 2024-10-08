import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  const [language, setLanguage] = useState("es");
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const module = await import(`../locales/${language}.json`);
        setDictionary(module.default);
      } catch (error) {
        console.error(`Failed to load ${language} translations:`, error);
      }
    };

    loadDictionary();
  }, [language]);
  console.log(dictionary?.navbar);
  return (
    <main className="font-montserrat">
      {dictionary && (
        <>
          <Navbar dictionary={dictionary?.navbar} />
          <Home
            id={dictionary?.navbar?.options?.[0]?.name?.toLowerCase()}
            dictionary={dictionary?.home}
          />
          <Portfolio
            id={dictionary?.navbar?.options?.[1]?.name?.toLowerCase()}
            dictionary={dictionary?.portfolio}
          />
          <Skills
            id={dictionary?.navbar?.options?.[2]?.name?.toLowerCase()}
            dictionary={dictionary?.skills}
          />
          <Contact
            id={dictionary?.navbar?.options?.[3]?.name?.toLowerCase()}
            dictionary={dictionary?.contact}
          />
          <Footer dictionary={dictionary?.footer} />
          <button
            className="bg-primary border-[1px] hover:brightness-[160%] transition-all duration-300 border-opacity-[20%] border-white text-white font-extralight fixed z-[999999] sm:bottom-1 bottom-[calc(100%-42.5px)] left-1 rounded-sm py-1 px-2 text-sm"
            onClick={toggleLanguage}
          >
            {language === "es" ? "English" : "Español"}
          </button>
          <div id="portal" />
        </>
      )}
    </main>
  );
}

export default App;
