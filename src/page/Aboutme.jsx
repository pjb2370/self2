import React from "react";
import "../style/Aboutme.scss";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import CakeIcon from "@mui/icons-material/Cake";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
const Aboutme = () => {
  return (
    <div class="Aboutme">
      <div class="Aboutme_div">
        <div class="Aboutmetitle">About Me</div>

        <div class="Aboutmeimg">
          <div class="imgas">
            <img
              class="imgas1"
              id="porfile-img"
              src="https://i.postimg.cc/BnJRnf3F/image.png"
            />
          </div>
          <div class="AboutmeMain">
            <div class="Aboutme1">
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <PersonIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>이름</div>
                  <div>박종범</div>
                </div>
              </div>

              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <CakeIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>생년월일</div>
                  <div>96.08.01</div>
                </div>
              </div>
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <PhoneIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>연락처</div>
                  <div>010-5095-2370</div>
                </div>
              </div>
            </div>

            <div class="Aboutme1">
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <PlaceIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>주소지</div>
                  <div>대전광역시 대덕구</div>
                </div>
              </div>
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <ModeEditIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>
                    <div>이메일</div>
                    <div>dbwhd634@naver.com</div>
                  </div>
                </div>
              </div>
              <div class="Aboutme1div">
                <span class="Aboutme1icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
