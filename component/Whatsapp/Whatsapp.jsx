import React from "react";
// import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { FloatingWhatsApp } from "react-floating-whatsapp";

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

export default function Whatsapp() {
  return (
    <div className="App px-5">
      <FloatingWhatsApp
        className="  styles-module_whatsappButton__tVits  "
        phoneNumber="+919390112608"
        accountName="DPS"
        avatar="/assets/images/dps-logo.png"
      />
    </div>
  );
}
