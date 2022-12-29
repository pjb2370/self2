import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="f" class="Navbar">
      <div class="Navbar-wrap">
        <div class="Navbar-image">
          <img src="https://i.postimg.cc/BntN4g3r/2.jpg" alt="" />
        </div>
        <div class="Navbar-text">
          <div class="Navbar-text-main">
            <Link to="a" spy={true} smooth={true}>
              <span>About Me</span>
            </Link>
            <Link to="b" spy={true} smooth={true}>
              <span>Skill</span>
            </Link>
            <Link to="c" spy={true} smooth={true}>
              <span>Project</span>
            </Link>
            <Link to="d" spy={true} smooth={true}>
              <span>Career</span>
            </Link>
          </div>
          <div class="Navbar-text-table">
            <div class="Navbar-text-table-row">
              <div class="Navbar-text-table-cell">
                <div> - 박종범 - </div>
                <div>웹 프로그래밍 개발자</div>

                <div>안녕하세요.</div>
                <div>React, MYsql, Java, Spring Boot</div>
                <div>감사합니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
