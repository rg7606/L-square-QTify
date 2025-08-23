import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <Section
        title="Top Albums"
        endpoint="https://qtify-backend-labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        endpoint="https://qtify-backend-labs.crio.do/albums/new"
      />
    </div>
  );
}

export default App;
