import React from "react";
import Navbar from "./Layout/Navbar";
import Aboutme from "./page/Aboutme";
import Skill from "./page/Skill";
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
            <Projects />
          </div>
          <div id="d">
            <Career />
          </div>
          <div id="e">
            <Boot />
          </div>
        </div>
      </div>

      <Link to="f" spy={true} smooth={true}>
        <button class="상단이동">상단이동</button>
      </Link>
      <Link to="e" spy={true} smooth={true}>
        <button class="하단이동">하단이동</button>
      </Link>
    </div>
  );
};

export default App;
