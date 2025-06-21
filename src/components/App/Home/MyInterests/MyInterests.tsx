import MyInterestCard from "./MyInterestCard/MyInterestCard";
import "./MyInterests.scss";

// Research Works,
const MyInterests = () => {
  const interests = [
    {
      title: "Research",
      list: [
        "Medical Robotics",
        "Wearables & Bionics",
        "Mobile Healthcare",
        "Health Diagnosis",
        "Autonomous Systems",
        "Assistive Robotics",
      ],
    },
    {
      title: "Fields",
      list: [
        "Machine Learning",
        "Computer Vision",
        "Semiconductors",
        "IoT & Embedded Systems",
        "Robotics",
        "Software Engineering",
      ],
    },
    {
      title: "Passion",
      list: [
        "Home Automation",
        "Smart Healthcare",
        "Healthcare Advancement",
        "Accessible Tech Solutions",
      ],
    },
  ];

  return (
    <section className="my-interests" id="interests" data-aos="zoom-in">
      <h1>My Career Interests</h1>
      <p>My keen interests cut across these:</p>
      <div className="my-interests__list">
        {interests?.map((item, key) => (
          <MyInterestCard {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default MyInterests;
