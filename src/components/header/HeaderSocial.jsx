import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/amin-ullah-38b9b2158" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/EngrAminullah" target="_blank">
        <FaGithub />
      </a>
      <a href="https://stackoverflow.com/users/19782229/engr-aminullah"><FaStackOverflow/>
      </a>
    </div>
  );
};

export default HeaderSocial;
