import React from "react";
import {BiCheck} from 'react-icons/bi'

import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Coming Soon...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Loading....</p>
            </li>
            
            
          </ul>
        </article>
        {/* End Of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert Figma to react</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert psd to react</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert sketch to raect</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert xd to raect</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pixel Perfect Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>100% Mobile Responsive Design</p>
            </li>
            
          </ul>
        </article>
        {/* End Of Web Dev */}
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom React Native App.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert Figma to react native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert psd to react native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert sketch to react native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert xd to react native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>100% Responsive Design</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
