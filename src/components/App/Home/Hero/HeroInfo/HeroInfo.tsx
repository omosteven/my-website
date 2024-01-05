import { qoutes } from "assets/data";
import { Button } from "components/ui";
import { scrollToView } from "helpers";
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
      <h1 data-aos="zoom-in">Software Engineer</h1>
      <h2 data-aos="zoom-in">
        Hi, my name is <b>Steven Omole-Adebomi</b>
      </h2>
      <p>
        <span>I have something for you</span> -{" "}
        <i>"{qoutes[6]}"</i>
      </p>
      <div>
        <a href="mailto:omosteven123@gmail.com">
          <Button text="Contact Me" />
        </a>
        <span onClick={() => scrollToView("qoutes")}>
          {"Check More Quotes from Me ->"}
        </span>
      </div>
    </div>
  );
};

export default HeroInfo;
