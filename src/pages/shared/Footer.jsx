import React from "react";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer footer-center p-10 bg-[#271d21] text-white">
          <div>
            <Fade right>
              <p
                style={{ fontFamily: `'Pacifico', cursive` }}
                className="font-bold opacity-70 text-xl"
              >
                Spice Palate
              </p>
            </Fade>
            <p>Copyright © 2023 - All right reserved</p>
            <span className="leading-relaxed opacity-70">
              <small className="flex gap-4">
                <span className="link">Cookies policy</span>-
                <span className="link">Terms and conditions</span>
              </small>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
