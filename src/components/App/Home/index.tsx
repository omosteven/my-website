import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import MyInterests from "./MyInterests/MyInterests";
import MyQoutes from "./MyQoutes/MyQoutes";

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <MyInterests />
      <MyQoutes />
    </>
  );
};

export default Home;
