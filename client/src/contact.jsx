import "../src/contact.css";

export default function Contact() {
  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            required
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <input
            type="text"
            className="phone"
            placeholder="Your Phone Number"
            name="from_phone"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
        <p className="contactInfo">
          <i>
            Call me on: <strong>1-4376655034</strong>
          </i>
        </p>
        <p className="contactInfomail">
          email:{" "}
          <strong>
            <a href="mailto:bdzamora.98@gmail.com">bdzamora.98@gmail.com</a>
          </strong>
        </p>
        <p className="contactInfo">
          LinkedIn: www.linkedin.com/in/brenda-zamora98
        </p>
      </div>
    </div>
  );
}
