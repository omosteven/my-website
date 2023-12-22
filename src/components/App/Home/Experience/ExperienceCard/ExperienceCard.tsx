const ExperienceCard = (props: { title: String; skills: Array<any> }) => {
  const { title, skills } = props;
  return (
    <div className="experience-card" data-aos="zoom-in">
      <div>
        <h3>{title}</h3>
        <ul>
          {skills?.map((name, key) => (
            <li key={key}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
