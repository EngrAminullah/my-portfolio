import React from "react";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import "./contact.css";

const Contact = () => {
  return <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact___Container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>amin93pk@gmail.com</h5>
          <a href="mailto:amin93pk@gmail.com" target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>Aminullah</h5>
          <a href="https://m.me/29846a/" target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>+923420950576</h5>
          <a href="https://api.whatsapp.com/send?phone+923420950576" target="_blank">Send a Message</a>
        </article>
      </div>

      {/* End of Contact Option */}
      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message"  rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary"> Send Message</button>
      </form>
    </div>

  </section>;
};

export default Contact;
