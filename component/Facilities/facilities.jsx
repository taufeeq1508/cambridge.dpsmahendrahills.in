import Mediacomstyle from "../Homecompo/MediaCompo.module.css";
import "toastr/build/toastr.min.css";
import Teamstyle from "../Facilities/TeamSlider.module.css";

const facilities = () => {
  return (
    <>
      <div
        className={`${Teamstyle.campusouter} ${"container-sm mt-3 pt-3"}`}
        align="center"
      >
        <div className="container mb-5" align="center">
          <div className="row position-relative">
            <div className="col-12 ">
              <h1 className="balasmiq headingfont">Facilities</h1>
            </div>
          </div>
        </div>
        <div className={`${Teamstyle.divoutercampus} ${"container-sm px-5"}`}>
          <div></div>
        </div>
      </div>

      <div className="container">
        <div
          className={`${Teamstyle.campusouter} ${"container-sm mt-3 pt-3"}`}
          align="center"
        >
          <div className={`${Teamstyle.divoutercampus} ${"container-sm px-5"}`}>
            <div>
              <div
                className={`row branches-options h-100 ${Teamstyle.branchesContainer}`}
              >
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/lab.JPG"
                            alt="Top CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>Science Labs</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/football.jpeg"
                            alt="Best CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>football</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/music.JPG"
                            alt="Best CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>Music</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/Swim.jpeg"
                            alt="Best CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>swimming</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/music.JPG"
                            alt="Best CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>Music</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/computers.JPG"
                            alt="Best CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>computerlab</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/lab.JPG"
                            alt="Top CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>Science Labs</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className={`${Teamstyle.cardcampus} ${""}`}>
                    <div className=" facility-img">
                      <div class="gg-element">
                        <p className="mb-0">
                          <img
                            decoding="async"
                            src="/assets/images/FACILITIES/taekwondo.jpeg"
                            alt="Best CBSE Schools in Hyderabad"
                          />
                        </p>
                        <div class="overlay">
                          <h3>takewondo</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default facilities;
