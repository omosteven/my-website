import { assets } from "assets";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <div>
        <img src={assets.images.myPicture} alt="Steven" />
      </div>
    </div>
  );
};

export default HeroImage;
