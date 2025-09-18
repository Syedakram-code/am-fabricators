import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import Hero from "./components/Hero";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="font-sans py-12">
      <BackgroundImage />
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
