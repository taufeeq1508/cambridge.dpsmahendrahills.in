import { useRouter } from "next/router";
const FooterComp = () => {
  const history = useRouter();
  const routeApply = () => {

    let path = `/cotactus`;
    history.push(path);
    window.location.reload;
  }
  return (
    <>

      <footer className="background-green text-center text-lg-start ">

        {/* <div className="container p-4">

          <div className="row mt-5">

            <div className="col-lg-5 col-md-6 mb-2 mb-md-0 pe-5">

              <div className="d-flex w-100 mb-3 " >
                <img src="/assets/images/Homepage_Logos/DPS-CMBDGE-01.svg" alt="" className="img-fluid" />
              </div>

              <p className="opacity-75 font14 ms-2 Nunito text-justify">
                Delhi Public School Nacharam is one of the Best CBSE & Cambridge Schools in Hyderabad. We at DPS prepare our students for life, availing them to develop lasting ardency for learning and an apprised curiosity. The school is affiliated to IGCSE which is one of the most sought-after and recognized qualifications in the world.
              </p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a href="https://www.facebook.com/dpssecunderabad" target="_blank" rel="noreferrer" className="btn btn-outline-light m-1 rounded-circle opacity-75" role="button"><i className="fa fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dpsnacharam/" target="_blank"  rel="noreferrer" className="btn btn-outline-light m-1 rounded-circle opacity-75" role="button"><i className="fa fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/DPSSecunderabad" target="_blank"  rel="noreferrer" className="btn btn-outline-light m-1 rounded-circle opacity-75" role="button"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a className="btn btn-outline-light m-1 rounded-circle opacity-75"
                    href="https://www.linkedin.com/company/dpsnacharam/" target="_blank" rel="noreferrer"
                    role="button"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>

            </div>
            <div className="col-lg-2 col-md-6 mb-2 mb-md-0 mt-4 text-start">
              <h5 className="mb-2 text-sm">Our Branches</h5>

              <ul className="list-unstyled p-2 text-sm">
                <li className="mb-1">
                  <a href="https://www.dpsmahendrahills.in/" target="_blank" rel="noreferrer" className="text-white opacity-75 text-decoration-none hover-underline">DPS Mahendra Hills</a></li>
                <li className="mb-2">
                  <a href="https://www.dpsnadergul.in/" target="_blank" rel="noreferrer" className="text-white opacity-75 text-decoration-none hover-underline">DPS Nadergul</a></li>
                <li className="mb-2">
                  <a href="https://www.dpsaerocity.in/" target="_blank" rel="noreferrer" className="text-white opacity-75 text-decoration-none hover-underline">DPS Aerocity</a></li>
                <li className="mb-2">
                  <a href="https://www.dpssantoshnagar.in/" target="_blank" rel="noreferrer" className="text-white opacity-75 text-decoration-none hover-underline">DPS Santoshnagar (Feeder School of DPS Nadergul)</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-2 mb-md-0 mt-4 text-start">
              <h5 className="mb-2 text-sm">Support</h5>

              <ul className="list-unstyled p-2 text-sm">
                <li className="mb-1">
                  <a href="/privacy-policy" className="text-white opacity-75 text-decoration-none hover-underline">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-2 mb-md-0 mt-4 text-start">
              <h5 className="text-sm mb-2 ms-1">Address</h5>

              <ul className="list-unstyled p-2 text-tiny">
                <li>
                  <p className="text-white opacity-75 text-decoration-none hover-underline font14"><i className="fa fa-map-marker pe-2 text-sm"></i>
                    Balajee Arun Educational Society, Plot No.44, 42A, Nacharam - Mallapur Rd, Behind BSNL Telephone Exchange, Durga Nagar, Nacharam, Hyderabad, Telangana- 500076
                  </p>
                </li>
                <li>
                  <p className="text-white opacity-75 text-decoration-none hover-underline font14"><i className="fa fa-phone pe-2"></i>Toll-Free : 1800-212-999999, 040-67580013
                  </p>
                </li>
                <li>
                  <p className="text-white opacity-75 text-decoration-none hover-underline font14"><i className="fa fa-envelope pe-2 mb-0 "></i>
                    admission@dpssecunderabad.in
                    <br />email@dpssecunderabad.in
                    <br />principal@dpssecunderabad.in</p>
                </li>
              </ul>
            </div>

          </div>

        </div> */}

        <div className="text-center p-3 border-top opacity-75 container text-sm" >
          {/* All right reseved */}
          <p clpssName="fotter-para " >   © DPS . All rights reserved.</p>
        </div>

      </footer>
    </>
  );
}

export default FooterComp;