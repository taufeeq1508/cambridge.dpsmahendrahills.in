import ReactDOM from "react-dom";
import "../styles/globals.css";
import "../public/assets/css/stylehome.css";
import "../public/assets/css/admissionForm.css";
import "../public/assets/css/collaboration.css";
import "../public/assets/css/madatorydocuments.css";
import "../public/assets/css/react-date-picker.css";
import "../public/assets/css/react-phone-input.css";
import Head from "next/head";
import "../public/assets/bootstrap/css/bootstrap.min.css";
import "../public/assets/slick/slick.css";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../public/assets/bootstrap/js/bootstrap.bundle.min.js");
    import("../public/assets/js/header.js");
    import("../public/assets/js/script.js");
    import("../public/assets/js/jquery-migrate-1.2.1.min.js");
    // import("../public/assets/bootstrap/js/bootstrap.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
