import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						secondLogo={project.secondLogo}
						thirdLogo={project.thirdLogo}
						FourthLogo={project.FourthLogo}
						FifthLogo={project.FifthLogo}
						sixthLogo={project.sixthLogo}
						seventhLogo={project.seventhLogo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
