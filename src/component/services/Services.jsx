import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mastery of frontend frameworks for building dynamic web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>development of reusable and modular UI components.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure web applications adapt to various device.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficiency in Git and collaborative tools like GitHub.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilize CSS frameworks for responsive layouts.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Efficiently identify and resolve frontend errors and bugs</p>
            </li>
          </ul>
        </article>
        {/* ============================End of UI/UX========================= */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use HTML5 elements and semantic tags for structured content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement responsive layouts and styling quickly.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enhance interactivity and user experience.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enable asynchronous data retrieval without page refresh.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Track and manage code changes effectively.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Stay updated with emerging web technologies and trends.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Efficient code collaboration using Git/GitHub.</p>
            </li>
          </ul>
        </article>
        {/* ============================End of Web Development========================= */}


        <article className="service">
          <div className="service__head">
            <h3>Responsive Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write effective media queries for various screen sizes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Start design from mobile screens and progressively enhance for larger devices.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize images for varying screen resolutions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create navigation elements suitable for touch interactions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use preprocessors for efficient CSS development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Familiar with browser dev. tools for responsive issues.</p>
            </li>
          </ul>
        </article>
        {/* ============================End of Content Creation========================= */}
      </div>
    </section>
  );
};

export default Services;
