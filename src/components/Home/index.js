import Header from "../Header";
import ProjectItem from "../ProjectItem";
import AboutView from "../AboutView";
import ContactsView from "../ContactsView";
import { Component } from "react";
import "./index.css";

const projectsContainer = [
  {
    projectName: "ProjectName",
    projectLink: "View Project",
    description:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
  {
    projectName: "ProjectName",
    projectLink: "View Project",
    description:
      "What was your role, your deliverables,if the project was personal, freelancing.",
  },
  {
    projectName: "ProjectName",
    projectLink: "View Project",
    description:
      "You can also add in this description the type of the project,if it was for web, mobile, electron.",
  },
];

class Home extends Component {
  state = {
    projectsList: projectsContainer,
    projectName: "",
    projectLink: "",
    description: "",
  };

  onChangeProjectName = (event) => {
    this.setState({ projectName: event.target.value });
  };

  onChangeProjectLink = (event) => {
    this.setState({ projectLink: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onAddProject = (event) => {
    event.preventDefault();
    const { projectName, projectLink, description } = this.state;

    const newProject = {
      projectName: projectName,
      projectLink: projectLink,
      description: description,
    };
    this.setState((prevState) => ({
      projectsList: [...prevState.projectsList, newProject],
      projectName: "",
      projectLink: "",
      description: "",
    }));
  };

  render() {
    const { projectName, projectLink, description, projectsList } = this.state;
    return (
      <div className="home-container">
        <Header />
        <div className="title-image-container">
          <div className="title-container">
            <h1 className="title">Hello, my name is Ashok Kumar</h1>
            <p className="description">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <ul className="view-buttons">
              <a href="#projectsView">
                <li className="Project item">Projects</li>
              </a>
              <li className="linkedIn item">LinkedIn</li>
            </ul>
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dx94hnzfl/image/upload/v1612593409/Ellipse_1_2_uziel2.png"
              alt="img"
              className="image"
            />
          </div>
        </div>
        <form className="form" onSubmit={this.onAddProject}>
          <h1 className="add-appointment-heading">Add Project</h1>
          <label htmlFor="projectName" className="label">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={this.onChangeProjectName}
            className="input"
          />
          <label htmlFor="projectLink" className="label">
            Project Link
          </label>
          <input
            type="text"
            id="projectLink"
            value={projectLink}
            onChange={this.onChangeProjectLink}
            className="input"
          />
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            rows="8"
            cols="40"
            id="description"
            value={description}
            onChange={this.onChangeDescription}
            className="input"
          ></textarea>
          <button type="submit" className="add-project">
            Add
          </button>
        </form>
        <ul className="projects-list" id="projectsView">
          {projectsList.map((eachProject) => (
            <ProjectItem projectDetails={eachProject} />
          ))}
        </ul>
        <AboutView />
        <ContactsView />
      </div>
    );
  }
}
export default Home;
