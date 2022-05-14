import React from "react";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import { GlobalStyle } from "./utils/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Footer />
    </>
  );
};

export default App;
