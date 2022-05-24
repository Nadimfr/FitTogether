import React, { Component } from "react";
import "../ContactUs/contactus.scss";

class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      phone_number: "",
      message: "",
      state: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  sendEmail(e) {
    e.preventDefault();
    let user = {
      email: this.state.user?.email,
      name: this.state.user?.name,
      phone_number: this.state.user?.phone_number,
      message: this.state.user?.message,
      state: this.state.user?.state,
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      const data = {
        email: this.state.email,
        name: this.state.fullname,
        phonenumber: this.state.phonenumber,
        message: this.state.message,
        state: this.state.user?.state,
      };
      console.log(data);
      event.preventDefault();
    }
  };

  render() {
    return (
      <>
        <div className="Contact_us">
          <div class="container">
            <div class="contact-box">
              <div class="left"></div>
              <div class="right">
                <h2>Contact Us</h2>
                <input
                  type="text"
                  class="field"
                  placeholder="Your Name"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                <input
                  type="text"
                  class="field"
                  placeholder="Your Email"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                <input
                  type="text"
                  class="field"
                  placeholder="Phone"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                <textarea
                  placeholder="Message"
                  class="field"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                ></textarea>
                <button onClick={(e) => this.sendEmail(e)} class="btn">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactus;
