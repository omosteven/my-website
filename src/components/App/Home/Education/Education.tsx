import "./Education.scss";

const educations = [
  {
    degree: "Masters of Computer Science - University of Salerno.",
    field: "Computer Science (Internet of Things).",
    achievements: [
      {
        title: "Unisa Scholarship.",
        text: "Awarded as one of the 50 winners at the University Scholarship.",
      },
    ],
  },
  {
    degree: "Bachelor of Technology - Federal University of Technology Akure.",
    field: "Computer Science - Second Upper Grade.",
    achievements: [
      {
        title: "Faculty Software Director.",
        text: "Served as the director of software for of a faculty of over 3,000 students.",
      },
      {
        title: "University Programming Contest - Silver Medal Team.",
        text: "Came second for the university in a team of 3 amongst 16 other universities at the Nigerian University Collegiate Programming Contest (NUCPC).",
      },
      {
        title: "National Blockchain Hackathon - Gold Medal Team.",
        text: "A student coordinator of the winning University team at the National Blockchain Hackathon.",
      },
      {
        title: "University Award of Productivity & Excellence.",
        text: "Received an award of excellence from the University.",
      },
      {
        title: "Letter of Honorary from the Vice chancellor.",
        text: "Received a Honorary letter from the University's Vice chancellor.",
      },
    ],
  },
];

const Education = () => {
  return (
    <section className="education" id="education" data-aos="zoom-in">
      <h1>Education</h1>
      <p>
        Below contains highlights of my academic experience and qualifications
      </p>
      {educations.map(({ degree, field, achievements }, i) => (
        <div className="education__timeline" key={i}>
          <h2>{degree}</h2>
          <p>{field}</p>
          {achievements.map(({ text, title }, j) => (
            <div key={j}>
              <h3>{title}</h3>
              <p>- {text}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Education;
