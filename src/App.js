import React from "react";
import Navbar from "./Layout/Navbar";
import Aboutme from "./page/Aboutme";
import Projects from "./page/Projects";
import "./App.scss";

const App = () => {
  return (
    <div>
      <div className="Layout">
        <div className="LayoutMain">
          <Navbar />
        </div>
        <div className="Layoutcomponents">
          <div id="a">
            <Aboutme />
          </div>
          <div id="c">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
