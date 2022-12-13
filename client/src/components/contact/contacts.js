import React, { useState } from "react";
import "./contact.css"
const Contacts = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const sendMe = async () => {
    if(state.name==='' || setState.email==='' || setState.message==='')
     alert('All the fields are mandatory!')
     else
  alert('Email successfully send to Ujjawal tyagi🥳')
  };

  return (
    <div id="contact">
      <div className="upperBody">
        <div className="contact-main">
          <h1>Contact.</h1>
          <p className="contact-para">
            your most welcome here,you may contact me on my social media
            accounts or email me personally.
          </p>
        </div>
      </div>

      <div className="email-body">
        <div className="email-content">
          <p className="email-para">Send me an email!</p>
          <form>
            <div className="nm-eml">
              <label>Name</label>
              <br />
              <input
                onChange={(e) => setState({ ...state, name: e.target.value })}
                type="text"
              ></input>
              <br />
            </div>

            <div className="nm-eml">
              <label>Email</label>
              <br />
              <input
                onChange={(e) => setState({ ...state, email: e.target.value })}
                type="text"
              ></input>
              <br />
            </div>

            <div className="msg">
              <label>Message</label>
              <br />
              <input
                className="msg-body"
                onChange={(e) =>
                  setState({ ...state, message: e.target.value })
                }
                type="text"
              ></input>
              <br />
            </div>
            <button className="send-btn" onClick={sendMe}>
              Send
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <ul>
          <li>
            <a href="https://www.instagram.com/ujjwal_tyagi_17/">
              <img src="https://img.icons8.com/3d-fluency/2x/instagram-new.png" />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/ujjwaltyagi.ujjwaltyagi.50/">
              <img src="https://img.icons8.com/fluency/2x/facebook-new.png" />
            </a>
          </li>

          <li>
            <a href="https://github.com/UjjawalTyagi123">
              <img src="https://img.icons8.com/3d-fluency/2x/github.png" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/Ujjawal27808061">
              <img src="https://img.icons8.com/color/2x/twitter--v3.png" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/ujjawal-tyagi-0a8319223/">
              <img src="https://img.icons8.com/office/2x/linkedin-circled--v2.png" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Contacts;
