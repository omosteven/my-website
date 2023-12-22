import { qoutes } from "assets/data";
import "./MyQoutes.scss";
import MyQouteCard from "./MyQouteCard/MyQouteCard";
import Marquee from "react-fast-marquee";

const MyQoutes = () => {
  return (
    <section className="myqoutes" id="qoutes" data-aos="zoom-in">
      <h1>My Qoutes</h1>
      <p>
        Gain some insights into your thought process through a few favourite
        qoutes from me.
      </p>

      <Marquee speed={100} pauseOnHover>
        <div className="myqoutes__list" data-aos="zoom-in">
          {qoutes?.map((qoute, key) => (
            <MyQouteCard qoute={qoute} key={key} />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default MyQoutes;
