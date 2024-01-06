import "./index.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectName, projectLink, description } = projectDetails;

  return (
    <li className="project-item">
      <h1 className="name">{projectName}</h1>
      <p className="description">{description}</p>
      <button className="link">{projectLink}</button>
    </li>
  );
};
export default ProjectItem;
