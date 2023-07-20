import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const {
		logo,
		secondLogo,
		thirdLogo,
		FourthLogo,
		FifthLogo,
		sixthLogo,
		seventhLogo,
		title,
		description,
		linkText,
		link,
	} = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="firstLogo" />
							<img src={secondLogo} alt="secondLogo" />
							<img src={thirdLogo} alt="thirdLogo" />
							<img src={FourthLogo} alt="FourthLogo" />
							<img src={FifthLogo} alt="FifthLogo" />
							<img src={sixthLogo} alt="sixthLogo" />
							<img src={seventhLogo} alt="seventhLogo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
