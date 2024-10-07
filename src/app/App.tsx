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
  const [dictionary, setDictionary] = useState<any | null>(null);

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
      <Footer
        dictionary={dictionary?.footer}
      />
    </main>
  );
}

export default App;
