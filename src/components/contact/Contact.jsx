import React from "react";

import "./contact.css";

const Contact = () => {
  return <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact___Container">
      <div className="contact__option">
        <article className="contact__option">
          <h4>Email</h4>
          <h5>amin93pk@gmail.com</h5>
          <a href="mailto:amin93pk@gmail.com">Send a Message</a>
        </article>
      </div>

      {/* End of Contact Option */}
      <form action=""></form>
    </div>

  </section>;
};

export default Contact;
