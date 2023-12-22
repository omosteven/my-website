import { qoutes } from "assets/data";
import { Button } from "components/ui";
import { useEffect, useState } from "react";

const HeroInfo = () => {
  const [currentQouteNo, setCurrentQouteNo] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentQouteNo(Math.floor(Math.random() * qoutes.length + 1));
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="hero-info">
      <h1>Software Engineer/Robotics Engineer(Becoming)</h1>
      <h2>
        Hi, my name is <b>Steven Omole-Adebomi</b>
      </h2>
      <p>
        <span>Find my favourite Qoutes</span> -{" "}
        <i>"{qoutes[currentQouteNo - 1]}"</i>
      </p>
      <div>
        <Button text="Contact Me" />
        <span>{"Read More Qoutes from Me ->"}</span>
      </div>
    </div>
  );
};

export default HeroInfo;
