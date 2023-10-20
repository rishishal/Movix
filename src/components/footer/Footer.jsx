import "./Footer.scss";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='menuItems'>
          <li className='menuItem'>Terms Of Use</li>
          <li className='menuItem'>Privacy-Policy</li>
          <li className='menuItem'>About</li>
          <li className='menuItem'>Blog</li>
          <li className='menuItem'>FAQ</li>
        </ul>
        <div className='infoText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className='socialIcons'>
          <span className='icon'>
            <Link
              to={"https://www.facebook.com/profile.php?id=100021258036334"}
            >
              <FaFacebookF />
            </Link>
          </span>
          <span className='icon'>
            <Link to={"https://www.instagram.com/rishishal/"}>
              <FaInstagram />
            </Link>
          </span>
          <span className='icon'>
            <Link to={"#"}>
              <FaTwitter />
            </Link>
          </span>
          <span className='icon'>
            <Link to={"https://www.linkedin.com/in/rishi-kumar-3355131b4/"}>
              <FaLinkedin />
            </Link>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
