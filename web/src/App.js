import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./styles/global.css";
import "./styles/pages/landing.css";

import logoImg from "./images/Logo.svg";

function App() {
  return (
    <div id="page-landing">
      <div className=" content-wrapper">
        <img src={logoImg} alt="happy" />
        <main>
          <h1> Leve a felicidade para o mundo</h1>
          <p>Visite orfanato e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Guarapuava</strong>
          <span>Paraná</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,6" />
        </a>
      </div>
    </div>
  );
}

export default App;
