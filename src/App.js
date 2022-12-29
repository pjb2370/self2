import React from "react";
import Navbar from "./Layout/Navbar";
import Aboutme from "./page/Aboutme";
import Skill from "./page/Skill";
import Archiving from "./page/Archiving";
import Projects from "./page/Projects";
import Career from "./page/Career";
import Boot from "./page/Boot";
import "./App.scss";
import { Link } from "react-scroll";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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
          <div id="b">
            <Skill />
          </div>
          <div id="c">
            <Archiving />
          </div>
          <div id="d">
            <Projects />
          </div>
          <div id="e">
            <Career />
          </div>
          <div id="g">
            <Boot />
          </div>
        </div>
      </div>

      <Link to="f" spy={true} smooth={true}>
        <button class="상단이동">상단이동</button>
      </Link>
      <Link to="g" spy={true} smooth={true}>
        <button class="하단이동">하단이동</button>
      </Link>
    </div>
  );
};

export default App;
