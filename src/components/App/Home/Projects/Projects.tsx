import "./Projects.scss";

const projects = [
  {
    title: "IoT Smart For The Blind",
    description:
      "This is a smart glass built by us using raspberry pi 0 w, camera module, AWS, ML, computer vision.",
    image: "",
    video: "/assets/smart-glass.MOV",
    link: "",
    tags: ["IoT", "EmbeddedSystem", "ML", "ComputerVision"],
  },
  {
    title: "Emotion-Recognition Based Diagnosis For Patient",
    description:
      "This is a course project involving using CNN-LSTM ML algorithms to train a model on some patient's data.",
    image: "",
    video: "/assets/smart-glass.MOV",
    link: "",
    tags: ["CNN", "LSTM", "ComputerVision", "SupervisedLearning"],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <p>Here I feature some of my recent projects.</p>
      <div className="projects__list">
        {projects?.map(({ title, description, image, video, tags }, key) => (
          <div key={key}>
            <video src={video} controls muted />
            <h3>{title}</h3>
            <h6>{description}</h6>
            <p>
              {tags.map((tag, j) => (
                <span key={j}>#{tag}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
