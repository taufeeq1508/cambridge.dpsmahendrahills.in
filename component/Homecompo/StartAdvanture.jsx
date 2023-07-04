import Mediacomstyle from '../Homecompo/MediaCompo.module.css';

import { useRouter } from "next/router";
const StartAdvanture = () => {
    const history = useRouter();
    const routeApply = () => {
        let path = `/applynow`;
        history.push(path);
    }
    const routecbse = () => {
        window.location.href = `https://www.studease.co.in/frmapplicationsale.aspx?campus=nh&curriculum=cbse`;
        return null;
    }
    const routecaim = () => {
        window.location.href = `https://www.studease.co.in/frmapplicationsale.aspx?campus=nh&curriculum=cambridgeinternational`;

        return null;
    }

    return (
        // <div className="container mt-5 pt-5 " align="center">

        <div className={`${Mediacomstyle.adventurebg} d-flex align-items-center justify-content-between flex-wrap`} align="center">
            <div className="flex-grow-1">
                <div className="row">
                    <div className="col-sm-12 text-start">
                        <h2 className={`${Mediacomstyle.textgreen} ${'balasmiq'}`}>Choose Best! Choose Us!</h2>

                    </div>
                </div>
                <div className="row">
                    <div className="col-8 text-start">
                        <p className={`${Mediacomstyle.textgreen} ${'Nunito'}`}>An ecstatic journey to a glorious future!
                        </p>
                    </div>
                    <div className="col-4 text-start">
                        {/* <a  className={`${Mediacomstyle.btnappy} ${'btn btn-success text-uppercase dropdown-toggle'}`} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">apply with us</a>
                                    <ul className={`${Mediacomstyle.ullia} ${"dropdown-menu"}`} aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href='#' onClick={routecbse}>CBSE</a></li>
                                            <li><a className="dropdown-item" href='#' onClick={routecaim}>Cambridge </a></li>
                                    </ul> */}
                    </div>
                </div>
            </div>
            <div className="dropdown chooseContainer">
                <button id="applyBtnDropdown"  className={`${Mediacomstyle.applyBtnDrpdwn} ${"text-uppercase poppins dropdown-toggle"}`}
                    data-bs-toggle="dropdown" aria-expanded="false"
                >apply now</button>
                <ul className={`dropdown-menu dropdownBgColor`} aria-labelledby="applyBtnDropdown">
                    <li><a className="dropdown-item" href='#' onClick={routecbse}>CBSE</a></li>
                    <li><a className="dropdown-item" href='#' onClick={routecaim}>Cambridge</a></li>
                </ul>
            </div>
        </div>
    );
}

export default StartAdvanture;