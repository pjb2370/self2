import React from "react";
import "../style/Archiving.scss";

const Archiving = () => {
  return (
    <div class="Archiving">
      <div class="Archivingtitle">Archiving </div>
      <div class="Archivinglist">
        <div class="Archivinglist_div">
          <img
            src="https://media.discordapp.net/attachments/1044869991683596290/1053230850663252018/558d9f6a0a5681b5.png"
            alt=""
          />

          <div>
            <a href="https://github.com/pjb2370">깃 허브 사이트 이동</a>
          </div>

          <div>
            소스 코드 저장소 <span>입니다.</span>
          </div>
          <li>과거 프로젝트 , 현재 프로그랩 소스 코드</li>
          <li>혼자 연습한 소스 코드</li>
        </div>
        <div class="Archivinglist_div">
          <img
            src="https://media.discordapp.net/attachments/1044869991683596290/1053230850990411776/31825375d0d55fcf.png"
            alt=""
          />
          <div>
            <a href="https://tv.kakao.com/channel/4014893/video">
              카카오 TV 사이트 이동
            </a>
          </div>

          <div>
            공부 및 지식 공유 목적의 블로그 <span>입니다.</span>
          </div>
          <li>웹 개발자의 길을 걸으며 공부한 관련 YouTube 시청</li>
          <li>혼자 공부한 영상</li>
          <li>필요한 소스 정이한 지식</li>
        </div>
      </div>
    </div>
  );
};

export default Archiving;
