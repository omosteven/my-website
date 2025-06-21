import "./Experience.scss";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning & Computer Vision",
      skills: ["Supervised", "Unsupervised", "Neural Networks"],
    },
    {
      title: "IoT & Embedded Systems.",
      skills: ["Arduino", "Raspberry PI", "Sensors", "3D Printing"],
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C++"],
    },
    {
      title: "Fronted Development",
      skills: ["ReactJS", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Backend Development",
      skills: ["NodeJs", "ExpressJs", "AWS Services"],
    },
  ];
  return (
    <section className="experience" id="experience" data-aos="zoom-in">
      <h1>3+ Years Industrial Experience</h1>
      <p>My experience and skillset cut across these engineering fields.</p>
      <div className="experience__list">
        {experiences?.map((item, key) => (
          <ExperienceCard {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
