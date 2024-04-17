import React, { useRef } from "react";
import line from "../../assets/Images/line.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import twitter from "../../assets/Images/twitter.png";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.user_phone.value;
    const message = form.current.message.value;

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    emailjs
      .sendForm("service_u6w773p", "template_l7fkptp", form.current, {
        publicKey: "PYQGL3fI0i4CLVEVY",
      })
      .then(
        () => {
          alert("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="block1 d-flex justify-content-evenly align-items-center">
        <div>
          <div>
            <div className="contactUs text16">
              <img className="contactLine" src={line} alt="" srcset="" />{" "}
              Contact Us
            </div>
            <div className="width66">

            <div className="text40">We'd love to hear from you</div>
            <div className="text16">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text24">Let's talk</div>
          <div className="d-flex">
            <div className="text16 me-2">+91 9845012111</div>
            <div className="text16">lionsheshadri@gmail.com</div>
          </div>
          <hr />
          <div>
            <div className="text24">Head office</div>
            <div className="text16">Malleshwaram near to Big bazzar</div>
          </div>
          <div className="my-3">
            <div className="text24">Branch Office</div>
            <div className="text16">Rajajinagar near to Orion Mall</div>
          </div>
          <div className="d-flex justify-content-start">
            <img className="socialMediaIcons" src={facebook} alt="" srcset="" />
            <img
              className="socialMediaIcons mx-4"
              src={instagram}
              alt=""
              srcset=""
            />
            <img className="socialMediaIcons" src={twitter} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="formContainer">
          <h4>Contact Us</h4>
          <hr />
          <form ref={form} onSubmit={sendEmail} className="contactFrom">
            <label>
              <h6>Name</h6>
            </label>
            <input type="text" name="user_name" className="mb-1 inputBox" />
            <label>
              <h6>Email</h6>
            </label>
            <input type="email" name="user_email" className="mb-1 inputBox" />
            <label>
              <h6>Phone number</h6>
            </label>
            <input type="number" name="user_phone" className="mb-1 inputBox" />
            <label>
              <h6>Message</h6>
            </label>
            <textarea name="message" className="mb-1 inputBox" />
            <div className="col-12 send">
              <input type="submit" value="Send" className="sendBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
