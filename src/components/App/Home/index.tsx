import { useEffect } from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
// import Learning from "./Learning/Learning";
import MyInterests from "./MyInterests/MyInterests";
import MyQoutes from "./MyQoutes/MyQoutes";
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <MyInterests />
      {/* <Learning /> */}
      <MyQoutes />
    </>
  );
};

export default Home;
