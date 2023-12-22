import "./Experience.scss";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Fronted Development",
      skills: ["ReactJS", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend Development",
      skills: ["NodeJs", "ExpressJs", "AWS Services"],
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C++"],
    },
  ];
  return (
    <section className="experience" id="experience" data-aos="zoom-in">
      <h1>3+ Years Industrial Experience</h1>
      <p>
        My experience in the engineering industry cuts across these three
        software engineering fields
      </p>
      <div className="experience__list">
        {experiences?.map((item, key) => (
          <ExperienceCard {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
