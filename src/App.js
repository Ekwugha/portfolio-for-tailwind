import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    // Check if there's a theme preference stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    // Toggle between "light" and "dark" themes and save in localStorage
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <div
        className={`font-inter ${
          theme === "dark" ? "dark" : ""
        } bg-white dark:bg-slate-900`}
      >
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <Services />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
