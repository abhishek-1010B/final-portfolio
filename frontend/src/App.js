import React, { useState, useEffect } from "react";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import LoadingAnimation from "./components/LoadingAnimation.js";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
