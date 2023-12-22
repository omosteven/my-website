import MyInterestCard from "./MyInterestCard/MyInterestCard";
import "./MyInterests.scss";

// Research Works,
const MyInterests = () => {
  const interests = [
    {
      title: "Research",
      list: [
        "Medical Robotics",
        "Wearables",
        "Mobile Healthcare",
        "Health Diagnosis",
        "Therapeutic Interventions",
      ],
    },
    {
      title: "Industrial Experience",
      list: ["Software Engineering", "Robotics", "IoT & Embedded Systems"],
    },
    {
      title: "Passion",
      list: [
        "Home Automation",
        "Healthcare Advancement",
        "Accessible Tech Solutions",
        "Workplace Productivity",
      ],
    },
  ];

  return (
    <section className="my-interests">
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
