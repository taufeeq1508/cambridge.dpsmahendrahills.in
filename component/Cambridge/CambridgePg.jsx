import BoardStyle from "../BoardingPage/Boarding.module.css";
import AcadmicStyle from "../AcademicPage/Academic.module.css";
import StartAdvanture from "../Homecompo/StartAdvanture";
import Teamstyle from "../Cambridge/TeamSlider.module.css";
import AdmissionStyle from "../AdmissionsPage/AdmissionPage.module.css";
import Mediacomstyle from "../Cambridge/MediaCompo.module.css";
import NavhomeStyle from "../NavHeader/Navhome.module.css";
import Topstyles from "../NavHeader/Topsection.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Facilities from "../Facilities/facilities";
import BookSlot from "../BookSlot";
const CambridgePg = () => {
  useEffect(() => {
    import("../../public/assets/js/cambridge.js");
  }, []);
  const history = useRouter();
  const routeApply = () => {
    let path = `/applynow`;
    history.push(path);
    window.location.reload;
  };
  const routecbse = () => {
    window.location.href = `https://www.studease.co.in/frmapplicationsale.aspx?campus=nh&curriculum=cbse`;

    return null;
  };
  const routecaim = () => {
    window.location.href = `https://www.studease.co.in/frmapplicationsale.aspx?campus=nh&curriculum=cambridgeinternational`;

    return null;
  };

  return (
    <>
      <BookSlot />
      <section className="mt-3">
        <div className="container-sm" align="center">
          <h3 className="balasmiq headingfont mb-5">INTRODUCTION</h3>
          <p className="Nunito text-justify px-3">
            DPS Mahendrahills places a strong emphasis on your child's growth and
            development. We have international collaborations, including a
            partnership with Cambridge International Examinations (CAIE), which
            has resulted in a unique and stimulating learning environment that
            nurtures informed curiosity. Our curriculum, which follows the CBSE
            curriculum as well as the CAIE curriculum, allows children to gain a
            comprehensive understanding of the world through hands-on
            explorations. Give your child the opportunity to learn and grow with
            the best, as they become the leaders of tomorrow.
          </p>
        </div>
        <div className="container-sm" align="center">
          <img
            src="/assets/images/cambriintro.svg"
            alt=""
            className="img-fluid intro-img"
          />
        </div>
        <div className="mt-5"></div>
      </section>
      <section>
        <div className="container">
          {" "}
          <div className=" ">
            <div
              className={`${BoardStyle.pathwaybg} ${" mt-5 mb-2 px-3"}`}
              align="center"
            >
              {" "}
              <h3
                className={`${BoardStyle.h2style} ${"balasmiq mb-sm-5  mb-3 "}`}
              >
                THE CAMBRIDGE PATHWAY
              </h3>
              <p
                className={`${
                  BoardStyle.cambridgepara
                } ${"Nunito text-justify pr-5 px-sm-5"}`}
              >
                The four stages of Cambridge Pathway lead seamlessly from
                Primary to Secondary and pre-university years. Each stage builds
                the learners’ development from the previous one; it can also be
                offered separately. At DPS Cambridge we pave paths for building
                a curriculu, that matches student’s individual needs. Upon
                completion of Cambridge Upper Secondary and Cambridge Advanced
                stages, your child can achieve globally recognized
                qualifications like Cambridge IGCSE or Cambridge International
                AS & A Level.
              </p>
            </div>
          </div>
          <div className={` ${" mt-5 mb-2 px-3"}`} align="center">
            {" "}
            <img
              src="/assets/images/We access.png"
              alt=""
              className="cambridgepath-img"
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row"></div>
          <Facilities />
          <div className="container-sm pt-sm-5 ">&nbsp;</div>
          <div className="container-sm " align="center">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="container-sm">
                  <h1 className="balasmiq headingfont mb-5">
                    REASONS TO CHOOSE CAMBRIDGE
                  </h1>
                  <p className=" Nunito mx-sm-5 text-justify">
                    Constructive education for your genius children. Success is
                    in front of you, we at DPS will show the right way.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="contaner-sm">
                  <img
                    src="/assets/images/resonto.svg"
                    alt=""
                    className="img-fluid img-whycambridge"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container-sm pt-sm-5 mt-sm-5">&nbsp;</div>
          <div className="container-sm " align="center">
            <div className="row ">
              <div className="benifitsofchild-img col-12 col-sm-6">
                <div className="container-sm">
                  <div className="contaner-sm">
                    <img
                      src="/assets/images/cambridge learner 2.png"
                      alt=""
                      className="img-fluid img-benifitschild"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                {/*
                 */}
                <h3 className={`${BoardStyle.h4style} ${"balasmiq mb-5"}`}>
                  BENEFITS FOR YOUR CHILD
                </h3>
                <p className=" Nunito  me-4 txt-justify">
                  Cambridge Pathway helps students develop in-depth knowledge,
                  conceptual understanding and higher order thinking skills.We
                  regard that education is most effective when curriculum,
                  teaching and assessment are closely aligned.
                </p>
              </div>
              <div className="cambridgelearner-img col-12 col-sm-6">
                <div className="container-sm">
                  <div className="contaner-sm">
                    <img
                      src="/assets/images/cambridge learner 2.png"
                      alt=""
                      className="img-fluid img-benifitschild"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-sm mt-5 ">&nbsp;</div>
          </div>
        </div>
      </section>
      <div className=" ml-4 d-flex flex-column align-items-center justify-content-center">
        <div className=" d-md-block mx-auto text-center ">
          <a href="#bookslot">
            <button
              type="button"
              className={`${Topstyles.taglinebtnLeft} ${"poppins btn ms-4 "}`}
            >
              ENQUIRE
            </button>
          </a>
        </div>
      </div>

      <section>
        <section className={`${Teamstyle.bgrow} ${" mb-5 "}`}>
          <div className="container-sm pt-3" align="center">
            <h1 className="balasmiq headingfont mx-5 team-heading">OUR TEAM</h1>
            <p className="Nunito pb-3"></p>
          </div>

          <div className="container-fluid ">
            <div className="container-sm comma">
              <img
                src="/assets/images/dpls/lefcoma.svg"
                alt="as"
                className={` ${""}`}
              />
            </div>
            <div className="centerGrid position-relative ">
              

              <div>
                <div className="row">
                  <div className="col-sm-8  card-content mt-sm-5">
                    <div className="card-body-custom text-ourteam">
                      <input id="komara" type="checkbox" />

                      <p className="dps-content Nunito">
                        Shri. Malka Komaraiah who has enormous experience in the
                        field of education spanning 25 years. His vision and
                        yeoman service in the field of education has enabled DPS
                        Schools enter into a new era in education. He is
                        instrumental in integrating technology,
                      </p>
                      <div className=" contentp">
                        <p className="dps-content Nunito">
                          education & research to make DPS an exemplary
                          institution in preparing competent students to meet
                          the challenges of the present global scenario.
                        </p>

                        <label for="komara" className="read">
                          Read less ←
                        </label>
                      </div>

                      <h5 className="dps-director">M Komaraiah</h5>
                      <p className="dps-qualification">B-Tech, Civil</p>
                      <p className="dps-position">Pro Vice Chairman</p>
                      <label for="komara" className="read">
                        Read more →
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-4 card-image">
                    <div className="img-team position-relative">
                      <img
                        src="/assets/images/koman.jpg"
                        className={`${"img-fluid"} custom-team`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="row">
                  <div className="col-sm-8  card-content mt-sm-5">
                    <div className="card-body-custom text-ourteam">
                      <input id="ch2" type="checkbox" />

                      <p className="dps-content Nunito">
                        Maam is a triple Post- graduate and a doctorate in
                        education who is accredited as a global teacher, Diploma
                        holder from Cambridge University for teacher training
                        and certified from Harvard University in “Differentiated
                        instruction in English language”.
                      </p>
                      <div className=" contentp">
                        <p className="dps-content Nunito">
                          A National education excellence award winner and Best
                          teacher talent awardee and she serves a member of All
                          India Education research association and All India
                          Teacher association and has been the resource panel of
                          experts at National Institute of Educational Planning
                          and Administration (NIEPA). She had been in the
                          forefront research for Child centered multi level
                          approach to quality education (CHAMAQUE) with NCERT.
                          Maam is functioning as the Academic director of DPS
                          and Pallavi educational Institutions (Pallavi Model
                          schools and Pallvi kidz), apart from bearing various
                          roles.
                        </p>

                        <label for="ch2" className="read">
                          Read less ←
                        </label>
                      </div>

                      <h5 className="dps-director">Dr. T. Sudha</h5>
                      <p className="dps-qualification">
                        B.Sc, B.ED, M.A, M.Ed, Dr. from Jamila Milia University
                      </p>
                      <p className="dps-position">Director- Academics</p>
                      <label for="ch2" className="read">
                        Read more →
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-4 card-image">
                    <div className="img-team position-relative">
                      <img
                        src="/assets/images/Sudha.jpg"
                        className={`${"img-fluid"} custom-team`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-sm-8 card-content mt-sm-5">
                    <div className="card-body-custom text-ourteam">
                      <input id="ch3" type="checkbox" />

                      <p className="dps-content Nunito">
                        Founder and CEO of born bright, Yasasvi is a young
                        entrepreneur, an alumnus of DPS, Nacharam。 With a great
                        sense of responsibility to make the nation a better
                        place he stepped into the field of education and takes
                        keen interest in the upbringing of our group of schools
                        . Trained from BITS Pilani, Dubai Campus in the field of
                        civil engineering.
                      </p>
                      <div className=" contentp">
                        <p className="dps-content Nunito">
                          He is invested in exploring, learning and creating
                          distinct opportunities for all. He completed Minor in
                          business psychology and entrepreneurship from
                          university college of London. He is an Angel investor
                          and growth hacker from Wharton school of Business,
                          University of Pennsylvania (pencilvania). He is
                          currently the chief operating officer of Balaji Arun
                          Educational Soceity and leads from the forefront with
                          various projects that capture the attention of the
                          young generation.
                        </p>

                        <label for="ch3" className="read">
                          Read less ←
                        </label>
                      </div>

                      <h5 className="dps-director">Yasasvi Malka</h5>
                      <p className="dps-qualification">
                        BITS Pilani, BE , UCL(Minors in Business)
                      </p>
                      <p className="dps-position">COO</p>
                      <label for="ch3" className="read">
                        Read more →
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-4 card-image">
                    <div className="img-team position-relative">
                      <img
                        src="/assets/images/yasasvi.jpg"
                        className={`${"img-fluid"} custom-team`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-sm mt-3 mb-3">&nbsp;</div>
        </section>
      </section>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className={`${AcadmicStyle.modelradus} ${"modal-content"}`}>
            <div>
              <button
                type="button"
                className={`${AcadmicStyle.btnmodel} ${"text-end"}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src="/assets/images/modclsimg.svg"
                  alt=""
                  className={`${AcadmicStyle.btnimg} ${"img-fluid"}`}
                />
              </button>
            </div>
            <div className={`${AcadmicStyle.headerdiv} ${"modal-header"}`}>
              <img
                src="/assets/images/modeltopimg.svg"
                alt=""
                className={`${AcadmicStyle.headerimg}`}
              />
            </div>
            <div className="modal-body">
              <div className="mydivs">
                <div id="div1" className="popups">
                  <div className="container-sm mt-3">
                    <h3 className="txt-green mt-3 fw-bold balasmiq pb-4">
                      AS & A
                    </h3>
                    <div className="row justify-content-between">
                      <div className="col-sm-8">
                        <p className="pb-3 text-justify Nunito">
                          Cambridge International prepares school students for
                          life, helping them develop an informed curiosity and a
                          lasting passion for learning. We are part of the
                          University of Cambridge. Our Cambridge Pathway gives
                          students a clear path for educational success from age
                          5 to 19. Schools can shape the curriculum around how
                          they want students to learn – with a wide range of
                          subjects and flexible ways to offer them. It helps
                          students discover new abilities and a wider world, and
                          gives them the skills they need for life, so they can
                          achieve at school, university and work.
                        </p>
                      </div>
                      <div className="col-sm-3 me-3">
                        <button
                          type="button"
                          className={`${AcadmicStyle.btnmodelapply} ${
                            AcadmicStyle.btntop
                          } ${"btn text-uppercase dropdown-toggle"}`}
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          apply now
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecbse}
                            >
                              CBSE
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecaim}
                            >
                              Cambridge{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <img
                          src="/assets/images/cammodimg.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm">
                        <h3 className="text-orange fw-bold balasmiq pb-3 ">
                          What is Cambridge International AS & A Level ?
                        </h3>
                        <p className="mt-5 Nunito">
                          Cambridge International AS & A Level qualifications
                          are taken in over 130 countries with more than 530 000
                          subject entries each year. They are typically for
                          learners aged 16 to 19 years who need advanced study
                          to prepare for higher education.
                        </p>

                        <p className="mt-5 Nunito">
                          Our Cambridge Pathway aims to give your child a love
                          of learning that will stay with them through school,
                          university and beyond. Our approach supports schools
                          to develop learners who are:
                          <br />• confident in working with information and
                          ideas – their own and those of others
                          <br />• responsible for themselves, responsive to and
                          respectful of others
                          <br />• reflective and developing their ability to
                          learn
                          <br />• innovative and equipped for new and future
                          challenges
                          <br />• engaged intellectually and socially, ready to
                          make a difference.
                        </p>
                      </div>
                    </div>

                    <h4 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Benefits for your Child
                    </h4>
                    <p className=" pb-3 Nunito">
                      Cambridge International A Level is typically a two-year
                      course, and Cambridge International AS Level is typically
                      one year. Schools can choose to offer Cambridge
                      International AS Level qualifications in their own right,
                      or as a way to progress to Cambridge International A
                      Level.
                    </p>

                    <p className="pt-3 fw-bold txt-green poppins">
                      Opening up opportunities worldwide
                    </p>
                    <p className=" Nunito">
                      All UK universities and over 600 US universities accept
                      Cambridge International A Levelqualifications, including
                      Harvard, MIT, Stanford and Yale. In places such as the US
                      and Canada,good grades in carefully chosen Cambridge
                      International A Level subjects can result in up toone year
                      of university course credit.
                    </p>
                    <p className=" Nunito">
                      Learners can easily find out which universities worldwide
                      accept Cambridge qualifications by searching our online
                      database at{" "}
                      <a href="www.cambridgeinternational.org/recognition">
                        www.cambridgeinternational.org/recognition
                      </a>
                    </p>
                    <p className="pt-3 fw-bold txt-green poppins">
                      A global learning community
                    </p>
                    <p className=" Nunito">
                      With the Cambridge Pathway, your child is joining a global
                      community of learners from more than 10 000 schools in
                      over 160 countries. By developing a global outlook in
                      Cambridge learners, we aim to equip them for success in
                      the fast-changing modern world.
                    </p>
                    <h4 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Globally recognised qualifications
                    </h4>
                    <p className=" pb-3 Nunito">
                      Success in Cambridge qualifi cations opens doors to
                      universities worldwide. Universities tell us they value
                      the deep subject knowledge, independent research and
                      critical thinking skills that Cambridge qualifi cations
                      bring.
                    </p>

                    <p className=" pb-3 Nunito">
                      This guide summarises the key admissions requirements for
                      study in popular destinations for Cambridge students. It
                      also highlights some of the higher education institutions
                      that recognise Cambridge qualifi cations. For a more
                      comprehensive list, search our recognition database at{" "}
                      <a href="www.cambridgeinternational.org/recognitionsearch">
                        www.cambridgeinternational.org/recognitionsearch
                      </a>{" "}
                      . Please always check entry criteria with institutions
                      before applying.
                    </p>
                  </div>
                </div>
                <div id="div2" className="popups">
                  <div className="container-sm mt-3">
                    <h3 className="txt-green mt-3 fw-bold balasmiq pb-4">
                      GRADE I TO VI
                    </h3>
                    <div className="row justify-content-between">
                      <div className="col-sm-8">
                        <p className=" pb-3 text-justify Nunito">
                          Cambridge Primary starts your child on an exciting
                          educational journey, setting out what they should be
                          able to do at each stage of their primary schooling.
                          It is the first stage of our Cambridge Pathway
                          programme that prepares students with the knowledge
                          and skills they need for life, helping them thrive at
                          school, university and work.
                        </p>
                      </div>
                      <div className="col-sm-3 me-3">
                        <button
                          type="button"
                          className={`${AcadmicStyle.btnmodelapply} ${
                            AcadmicStyle.btntop
                          } ${"btn text-uppercase dropdown-toggle"}`}
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          apply now
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecbse}
                            >
                              CBSE
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecaim}
                            >
                              Cambridge{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <img
                          src="/assets/images/cammodgrad.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm">
                        <h3 className="text-orange fw-bold balasmiq pb-5 ">
                          A love of learning
                        </h3>

                        <p className="text-sm1 Nunito">
                          Your child’s needs as a learner are at the heart of
                          our approach to education. Our Cambridge
                          <br />
                          Pathway aims to give your child a love of learning
                          that will stay with them through school,
                          <br />
                          university and beyond. Our approach supports schools
                          to develop learners who are:
                          <br />• confident in working with information and
                          ideas – their own and those of others
                          <br />• responsible for themselves, responsive to and
                          respectful of others
                          <br />• reflective and developing their ability to
                          learn
                          <br />• innovative and equipped for new and future
                          challenges
                          <br />• engaged intellectually and socially, ready to
                          make a difference.
                        </p>
                      </div>
                    </div>

                    <h4 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Benefits for your Child
                    </h4>
                    <p className=" pb-3 Nunito">
                      Cambridge Primary prepares your child for success in the
                      later stages of education. All subjects feed into the
                      relevant Cambridge Upper Secondary qualifications.
                      Teachers can monitor your child’s development through
                      progress checks and assessments that we have built into
                      the programme. We offer a range of options for them to
                      choose from, depending on your school’s ethos and context,
                      to identify the best ways to support your child:
                    </p>

                    <p className="pt-3  Nunito">
                      • Computer-based assessments to measure and benchmark
                      learners’ potential and identify learning needs.
                      <br />• Teachers can assess some subjects in the classroom
                      and discuss with your child ‘what went well’ and how to
                      improve further.
                      <br />• Cambridge Primary Progression Tests help teachers
                      understand your child’s strengths throughout the school
                      year and areas where they need more help. These short
                      tests indicate where your child is on their learning
                      journey, instead of just showing right or wrong answers.
                      <br />• Cambridge Checkpoint tests are marked externally
                      by Cambridge International, and can be taken in the final
                      year of Cambridge Primary. Your child will receive a
                      statement of achievement and your school will receive
                      detailed feedback about their performance.
                    </p>

                    <h4 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Globally recognised qualifications
                    </h4>
                    <p className=" pb-3 Nunito">
                      With the Cambridge Pathway, your child is joining a global
                      community of learners from more than 10 000 schools in
                      over 160 countries. By developing a global outlook in
                      Cambridge learners, we aim to equip them for success in
                      the fast-changing modern world.
                    </p>
                  </div>
                </div>
                <div id="div3" className="popups">
                  <div className="container-sm mt-3">
                    <h3 className="txt-green mt-3 fw-bold balasmiq pb-4">
                      GRADE VII TO VIII
                    </h3>
                    <div className="row justify-content-between">
                      <div className="col-sm-8">
                        <p className=" pb-3 text-justify Nunito">
                          Cambridge Primary starts your child on an exciting
                          educational journey, setting out what they should be
                          able to do at each stage of their primary schooling.
                          It is the first stage of our Cambridge Pathway
                          programme that prepares students with the knowledge
                          and skills they need for life, helping them thrive at
                          school, university and work.
                        </p>
                      </div>
                      <div className="col-sm-3 me-3">
                        <button
                          type="button"
                          className={`${AcadmicStyle.btnmodelapply} ${
                            AcadmicStyle.btntop
                          } ${"btn text-uppercase dropdown-toggle"}`}
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          apply now
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecbse}
                            >
                              CBSE
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecaim}
                            >
                              Cambridge{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <img
                          src="/assets/images/cammodgrad.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm">
                        <h3 className="text-orange fw-bold balasmiq pb-5 ">
                          A love of learning
                        </h3>

                        <p className="text-sm1 Nunito">
                          Your child’s needs as a learner are at the heart of
                          our approach to education. Our Cambridge
                          <br />
                          Pathway aims to give your child a love of learning
                          that will stay with them through school,
                          <br />
                          university and beyond. Our approach supports schools
                          to develop learners who are:
                          <br />• confident in working with information and
                          ideas – their own and those of others
                          <br />• responsible for themselves, responsive to and
                          respectful of others
                          <br />• reflective and developing their ability to
                          learn
                          <br />• innovative and equipped for new and future
                          challenges
                          <br />• engaged intellectually and socially, ready to
                          make a difference.
                        </p>
                      </div>
                    </div>

                    <h4 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Benefits for your Child
                    </h4>
                    <p className=" pb-3 Nunito">
                      Cambridge Primary prepares your child for success in the
                      later stages of education. All subjects feed into the
                      relevant Cambridge Upper Secondary qualifications.
                      Teachers can monitor your child’s development through
                      progress checks and assessments that we have built into
                      the programme. We offer a range of options for them to
                      choose from, depending on your school’s ethos and context,
                      to identify the best ways to support your child:
                    </p>

                    <p className="pt-3  Nunito">
                      • Computer-based assessments to measure and benchmark
                      learners’ potential and identify learning needs.
                      <br />• Teachers can assess some subjects in the classroom
                      and discuss with your child ‘what went well’ and how to
                      improve further.
                      <br />• Cambridge Primary Progression Tests help teachers
                      understand your child’s strengths throughout the school
                      year and areas where they need more help. These short
                      tests indicate where your child is on their learning
                      journey, instead of just showing right or wrong answers.
                      <br />• Cambridge Checkpoint tests are marked externally
                      by Cambridge International, and can be taken in the final
                      year of Cambridge Primary. Your child will receive a
                      statement of achievement and your school will receive
                      detailed feedback about their performance.
                    </p>

                    <h4 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Globally recognised qualifications
                    </h4>
                    <p className=" pb-3 Nunito">
                      With the Cambridge Pathway, your child is joining a global
                      community of learners from more than 10 000 schools in
                      over 160 countries. By developing a global outlook in
                      Cambridge learners, we aim to equip them for success in
                      the fast-changing modern world.
                    </p>
                  </div>
                </div>
                <div id="div4" className="popups">
                  <div className="container-sm mt-3">
                    <h3 className="txt-green mt-3 fw-bold balasmiq pb-4">
                      GRADE IX TO X
                    </h3>
                    <div className="row justify-content-between">
                      <div className="col-sm-8">
                        <p className=" pb-3 text-justify Nunito">
                          Cambridge Primary starts your child on an exciting
                          educational journey, setting out what they should be
                          able to do at each stage of their primary schooling.
                          It is the first stage of our Cambridge Pathway
                          programme that prepares students with the knowledge
                          and skills they need for life, helping them thrive at
                          school, university and work.
                        </p>
                      </div>
                      <div className="col-sm-3 me-3">
                        <button
                          type="button"
                          className={`${AcadmicStyle.btnmodelapply} ${
                            AcadmicStyle.btntop
                          } ${"btn text-uppercase dropdown-toggle"}`}
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          apply now
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecbse}
                            >
                              CBSE
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={routecaim}
                            >
                              Cambridge{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <img
                          src="/assets/images/cammodgrad.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm">
                        <h3 className="text-orange fw-bold balasmiq pb-3 ">
                          Courses that challenge and inspire
                        </h3>

                        <p className="pt-3 pb-3 fw-bold txt-green poppins">
                          What do our students study?
                        </p>

                        <p className="text-sm1 Nunito text-justify">
                          We want each student to fulfil their potential and
                          make the most of their strengths and interests. So we
                          offer a wide range of subjects and let every student
                          choose the subjects they love and the subjects they’re
                          best at. We design programmes – with the help of
                          expert educators in schools and universities – to
                          challenge students, and get them excited about what
                          they’re learning. They learn about the key concepts of
                          each subject in depth, so they understand them inside
                          and out.
                          <br />
                          Cambridge Pathway programmes are flexible, so teachers
                          can use examples that are relevant to students’ local
                          context and culture. Students learn in English, and
                          our assessment is accessible to speakers of English as
                          a second or foreign language.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-orange fw-bold balasmiq pt-5 pb-3">
                      How does the Cambridge Pathway work?
                    </h3>
                    <p className=" pb-3 Nunito">
                      When we design our programmes, we start by identifying
                      what a student needs to learn. Students have to
                      demonstrate understanding and the core knowledge of a
                      subject, as well as think critically. Exams are there to
                      recognise, reward and encourage learning.
                      <br />
                      The Cambridge Pathway takes students on a journey through
                      Cambridge Primary, Cambridge Lower Secondary, Cambridge
                      IGCSE and Cambridge International AS & A Level. Students
                      can join at any stage.
                      <br />
                      The curriculum in each stage has aims and objectives that
                      support students to become confident, responsible,
                      reflective, innovative and engaged. These are the
                      attributes of Cambridge learners.
                    </p>

                    <h3 className="text-orange fw-bold balasmiq pt-4 pb-3">
                      Benefits for your Child
                    </h3>
                    <p className=" pb-3 Nunito">
                      Cambridge IGCSE helps students to develop knowledge,
                      understanding and skills in subject content and
                      intellectual enquiry. The programme has been designed for
                      students worldwide, including those whose first language
                      is not English.
                      <br />
                      We offer students the flexibility to choose from over 70
                      subjects at Cambridge IGCSE, meaning they can study the
                      subjects they enjoy and are best at. Assessment takes
                      place at the end of the course and offers students a range
                      of ways to demonstrate their learning, including written,
                      oral, coursework and practical assessments. There are also
                      options to suit learners of different abilities. The
                      grades awarded at Cambridge IGCSE are A*–G, with A* being
                      the highest. This means that Cambridge IGCSE is a great
                      foundation for further study, including Cambridge
                      International AS & A Level, Cambridge Pre-U and other
                      post-16 routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <StartAdvanture></StartAdvanture>
            </div>
          </div>
        </div>
        <div
          className={`${
            AdmissionStyle.arrowdiv
          } ${"container-fluid d-flex justify-content-between"}`}
        >
          <div className=" d-inline-flex text-start">
            <button name="prev" className="btn">
              <img
                src="/assets/images/leftarrow.svg"
                alt=""
                className={`${AdmissionStyle.arrowimg}`}
              />
            </button>
          </div>

          <div className="d-inline-flex text-end">
            <button name="next" className="btn">
              <img
                src="/assets/images/rightarrow.svg"
                alt=""
                className={`${AdmissionStyle.arrowimg}`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambridgePg;
