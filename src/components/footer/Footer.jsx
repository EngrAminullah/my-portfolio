import React from "react";
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaStackOverflow} from 'react-icons/fa'
import "./footer.css";

const Footer = () => {
  return <footer>
    <a href="#" className="footer__logo">Aminullah</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>

    <div className="footer__socials">
      <a href="https://github.com/EngrAminullah"><AiFillGithub /></a>
      <a href="https://www.linkedin.com/in/amin-ullah-38b9b2158/"><AiOutlineLinkedin/></a>
      <a href="https://stackoverflow.com/users/19782229/engr-aminullah"><FaStackOverflow/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy;Aminullah. All right reserved.</small>
    </div>
  </footer>;
};

export default Footer;
