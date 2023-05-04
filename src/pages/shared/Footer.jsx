import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 mt-10 bg-[#271d21] text-white">
        <div>
          <p
            style={{ fontFamily: `'Pacifico', cursive` }}
            className="font-bold opacity-70 text-xl"
          >
            Spice Palate
            <br />
          </p>
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
  );
};

export default Footer;
