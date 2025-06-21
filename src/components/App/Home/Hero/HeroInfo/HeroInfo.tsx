// import { qoutes } from "assets/data";
import { Button } from "components/ui";
// import { useEffect, useState } from "react";

const HeroInfo = () => {
  // const [currentQouteNo, setCurrentQouteNo] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentQouteNo(Math.floor(Math.random() * qoutes.length + 1));
  //   }, 2000);
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="hero-info">
      <h1 data-aos="zoom-in">Computer Engineer</h1>
      <h2 data-aos="zoom-in">
        Hi, my name is <b>Steven Bolu Omole-Adebomi</b>
      </h2>
      <p>
        And I am deeply passionate about addressing challenges in healthcare and
        home assistance through the application of robotics, smart wearables,
        embedded Systems, and software engineering to find innovative solutions.
        {/* <i>"{qoutes[6]}"</i> */}
      </p>
      <div>
        <a href="mailto:omosteven123@gmail.com">
          <Button text="Contact Me" />
        </a>
        <a
          href="https://docs.google.com/document/d/1dQUdYSvu-yDbPyp52yCY0jWyS8Q58ed1adSsuCSHzUE/edit?usp=sharing"
          target="__blank"
        >
          {"View My CV"}
        </a>
      </div>
    </div>
  );
};

export default HeroInfo;
