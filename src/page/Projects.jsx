import React from "react";
import "../style/Project.scss";

const Projects = () => {
  return (
    <div class="Projects">
      <div class="Projectstitle">Projects</div>
      <div>
        <div class="Projectslist">
          <div class="Projectslisttitle">
            <div>증시 / 코인 정보 자유게시판</div>
            <div>
              2022.10.03 ~ 2022.11.28 <span>(팀 프로젝트)</span>
            </div>
          </div>
          <div class="Projectslist1">
            <div class="slider">
              <input type="radio" name="slide" id="slide1" checked />
              <input type="radio" name="slide" id="slide2" checked />
              <input type="radio" name="slide" id="slide3" checked />
              <input type="radio" name="slide" id="slide4" checked />
              <input type="radio" name="slide" id="slide5" checked />
              <input type="radio" name="slide" id="slide6" checked />
              <input type="radio" name="slide" id="slide7" checked />
              <input type="radio" name="slide" id="slide8" checked />
              <ul id="imgholder" class="imgs">
                <li>
                  <img src="https://i.postimg.cc/LsjGsgVw/1.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/cJmPp9NC/2.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/d0rG3p0Q/3.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/2jbLSg9s/4.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/MGfJQbkp/5.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/C566Y6RQ/6.jpg" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/HL4ZjLJ5/7.jpg" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/ZRzWsTjf/8.jpg" />
                </li>
              </ul>
              <div class="bullets">
                <div>각 게시판 사진 </div>
                <label for="slide1">메인</label>
                <label for="slide2">게시판</label>
                <label for="slide3">상세페이지</label>
                <label for="slide4">검색</label>
                <label for="slide5">개인정보</label>
                <label for="slide6">User</label>
                <label for="slide7">Board</label>
                <label for="slide8">Board_Img</label>
              </div>
            </div>

            <div class="Projectslist1_div">
              <div>
                코인과 증시 정보 공유 할 수 있게 도와주는 웹사이트 입니다.
              </div>
              <div>
                현대 사회에서 한동안 뜨거웠던 주식, 코인 시장의 정보를
                여러사이트가 아닌 한개의 사이트에서 확인할수있으면 좋은것같다는
                생각에 만들게 되었습니다.
              </div>
              <div>
                <span>React, Spring Boot</span> 를 이용하여 프론트와 백엔드를
                제작 했으면 팀원들 간에 부분 역활을 나누워 팀 프로젝트를 진행
                하였습니다.
                <span>Spring Boot</span> 를 처음으로 사용해보며 Spring 보다
                편리함을 느꼈으며
                <span>Annotation</span> 가 어느곳에 적절히 쓰이는지 배웠습니다.
              </div>
              <div>
                <span>Spring Boot</span> 를 이용하여 벡엔드를 이용하였고
                테이블은 <span>My SQL</span> 을 이용하여 데이터를 저장
                하였습니다. 이미지 업로드는 <span>AWS S3</span> 를 이용하여
                미디어서버를 만들고 미디어서버 저장소에 저장하였습니다.
              </div>
              <div>
                전에는 프론트 작업만 팀프로젝트를 진행하였는데 이번엔 팀
                프로젝트로 구간을 나누워 진행을 하였고 그과정에{" "}
                <span>부족한 부분이 있었지만</span> 기본에 충실하게 프로젝트를
                진행 하었습니다.
              </div>

              <a href="http://www.noh.world:3000/" class="coin">
                <button>사이트 이동</button>
              </a>
              <a href="https://wiken.io/ken/11515" class="coin">
                <button>기술서 이동</button>
              </a>
              <hr />
              <table>
                <tbody>
                  <tr>
                    <td>주요 기능</td>
                    <td>
                      로그인,회원가입,검색기능,실시간 인기글,증시 전일 데이테
                      API,코인 현시간 데이터 API,상세페이지,각게시판,로그인시
                      글쓰기,수정,삭제, 로그인시 댓글쓰기,삭제,관리자 기능,목록
                      리스트화,이미지 업로드
                    </td>
                  </tr>

                  <tr>
                    <td>Frontend</td>
                    <td>
                      React, Tailwind, dasiy, Material-ul, Visual Studio Code
                    </td>
                  </tr>
                  <tr>
                    <td>Backend</td>
                    <td>Spring Boot, IntelliJ, Postman</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>My SQL</td>
                  </tr>
                  <tr>
                    <td>Deployment</td>
                    <td>AWS </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="Projectslist">
        <div class="Projectslisttitle">
          <div>포트폴리오 </div>
          <div>
            2022.12.20 ~ 2022.12.31 <span>(개인 프로젝트)</span>
          </div>
        </div>
        <div class="Projectslist1">
          <div class="slider1">
            <img src="https://i.postimg.cc/xdyMN3b1/image.jpg" />
          </div>

          <div class="Projectslist1_div">
            <div>
              포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이
              웹사이트에 해당합니다.
            </div>

            <div>
              이미 순수 React로 개발을 완료한 프로젝트였지만, React의 학습을
              위해 이를 개발하였습니다. 레이아웃의 개념과 코드를 정리 할 수있는
              기회가 되었습니다. 이후 다른 작업시 쉽게 이해는 계기가 되었습니다.
            </div>

            <a href="https://github.com/pjb2370/self2" class="coin">
              <button>깃허브 이동</button>
            </a>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>주요기능</td>
                  <td>
                    간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 카카오 Tv
                    링크, 프로젝트 경험, 학원 수업
                  </td>
                </tr>

                <tr>
                  <td>Frontend</td>
                  <td>React,Tailwind,dasiy,Material-ul,Visual Studio Code</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;
