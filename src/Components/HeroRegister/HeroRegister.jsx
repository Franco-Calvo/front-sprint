import React from "react";
import "./heroregister.css";
import FormRegister from "../FormRegister/FormRegister";



export default function HeroRegister() {
  return (
    <div className="heroRegister">
      <div className="welcome">
        <div className="container-content">
          <h2>Welcome!</h2>
          <p>
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>

          <FormRegister/>
        </div>
      </div>

      <div className="background"></div>
    </div>
  );
}
