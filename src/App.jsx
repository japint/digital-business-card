import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { cardData } from "./cardData";

const Card = () => {
  return (
    <div className="card">
      <Navbar />
      <Main {...cardData} /> {/* use spread operator */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
