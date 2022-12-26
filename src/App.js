import React from "react";
import Navbar from "./Layout/Navbar";
import Aboutme from "./page/Aboutme";
import "./App.scss";
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
        </div>
      </div>
    </div>
  );
};

export default App;
