import "./Hero.scss";
import HeroImage from "./HeroImage/HeroImage";
import HeroInfo from "./HeroInfo/HeroInfo";

const Hero = () => {
  return (
    <section className="hero">
      <HeroInfo />
      <HeroImage />
    </section>
  );
};

export default Hero;
