import NavhomeStyle from "../NavHeader/Navhome.module.css";
import Topstyles from "../NavHeader/Topsection.module.css";
import { useRouter } from "next/router";
const Navhome = ({ headerContainerClass = "" }) => {
  const history = useRouter();
  const { asPath } = useRouter();
  const routeApplyTc = () => {
    window.location.href = `https://studease.co.in/frmTCSRepository.aspx`;

    return null;
  };
  const routecbse = () => {
    window.location.href = `https://www.studease.co.in/frmApplicationsale.aspx?campus=nh&curriculum=cbse`;

    return null;
  };
  const routecaim = () => {
    window.location.href = `https://www.studease.co.in/frmApplicationsale.aspx?campus=nh&curriculum=cambridgeinternational`;

    return null;
  };

  return (
    <>
      <div
        className={`container-fluid multiple-header-container px-0 ${headerContainerClass}`}
      >
        <div className="header top-header px-lg-3 w-100">
          <nav className="navbar navbar-expand-lg navbar-dark pb-0" id="nav1">
            <a
              href="/"
              className={`${NavhomeStyle.navlink} ${"d-flex navbar-brand"}`}
            >
              <img
                src="/assets/images/Homepage_Logos/DPS-CMBDGE-04.svg"
                alt=""
                className={`${NavhomeStyle.linknav} ${
                  NavhomeStyle.headrelogo
                } ${"img-fluid"} px-2 py-2`}
                id="topimg"
              />
            </a>
            <a
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={`${NavhomeStyle.icon} ${"navbar-toggler-icon"}`}
              ></span>
            </a>
            <div
              className=" collapse navbar-collapse justify-content-end px-3"
              id="navbarNav"
            >
              <ul
                className={`${
                  NavhomeStyle.navside
                } ${"navbar-nav align-items-center"}`}
              >
                <li className="nav-item dropdown">
                  <a
                    href="tel:+919390112608"
                    className={`${
                      NavhomeStyle.applybtn
                    } ${"text-uppercase poppins"}`}
                  >
                    Call Now
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* <HeaderNotification /> */}
        </div>
        <div className="header bottom-header px-lg-3 w-100">
          <nav className="navbar navbar-expand-lg navbar-dark " id="nav2">
            <a
              href="/"
              className={`${NavhomeStyle.navlink} ${"d-none navbar-brand"}`}
            >
              <img
                src="/assets/images/Homepage_Logos/DPS-CMBDGE-04.svg"
                alt=""
                className={`${NavhomeStyle.linknav} ${
                  NavhomeStyle.headrelogo
                } ${"img-fluid"} px-2 py-2`}
                id="topimg"
              />
            </a>

            <div
              className="collapse navbar-collapse collapse-container px-3"
              id="navbddarNav"
            >
              <ul
                className={`${
                  NavhomeStyle.navside2
                } ${"navbar-nav align-items-center"}`}
               >
                <li className="nav-item d-none active-menu-item">
                  <a
                    href="tel:+919390112608"
                    className={`${
                      NavhomeStyle.applybtn
                    } ${"text-uppercase poppins"}`}
                   >
                   Call Now
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className={` ${"row"}`} align="center">
        <div className="header-shadow d-flex">
          <img
            src="/assets/images/Cambridge Results Slider.png"
            alt=""
            className={`${Topstyles.imgscre} ${"img-fluid"}`}
          />
        </div>
        <div
          style={{ zIndex: 1 }}
          className={`${NavhomeStyle.customcaption}  mb-5  d-flex flex-column align-items-left px-5 `}
          align="center"
         >
          <h1 className={`${Topstyles.taglineLeft1} ${"balasmiq "}`}>
            CAMBRIDGE 
          </h1>
          <h1 className={`${Topstyles.taglineLeft} ${"balasmiq "}`}>
            INTERNATIONAL
          </h1>
          
        </div>
      </div>

      <div className="carousel-inner"></div>
    </>
  );
};

export default Navhome;
