import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    const handleDarkModeChange = () => {
      const isDark = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDark);
    };

    window.addEventListener("storage", handleDarkModeChange);
    window.addEventListener("darkModeChanged", handleDarkModeChange);

    return () => {
      window.removeEventListener("storage", handleDarkModeChange);
      window.removeEventListener("darkModeChanged", handleDarkModeChange);
    };
  }, []);

  return (
    <>
      <Hero />
      <FeatureSection darkMode={darkMode} />
      <div id="contact">
        <div style={{ height: "100px" }} />
      </div>
    </>
  );
};

export default Home;
