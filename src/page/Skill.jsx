import React from "react";
import "../style/Skill.scss";
import { Link } from "react-scroll";

const Skill = () => {
  return (
    <div class="Skill">
      <div class="Skilltitle">
        <div class="Skilltitlediv">Skill</div>
        <div class="Skilllist">
          <div class="Skilllist_li">
            <div>프론트엔드</div>
            <img src="https://i.postimg.cc/jqDdjY4J/frontend.png" alt="" />
          </div>
          <div class="Skilllist_li">
            <div>벡엔드</div>
            <img src="https://i.postimg.cc/gk9dkX0f/frontend.png" alt="" />
            <div>서버 배포</div>
            <img src="https://i.postimg.cc/0N5dq9j0/deployment.png" alt="" />
          </div>
          <div class="Skilllist_li">
            <div>정보 공유</div>
            <img
              src="https://i.postimg.cc/GtFfpp7C/version-control.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
