import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{INFO.homepage.works.map((work, index) => (
							<div className="work" key={index}>
								<a href={work.href} target="_blank" rel="noreferrer">
									<img src={work.logo} alt={work.title} className="work-image" />
									<div className="work-description">
										<div className="work-titles">
											<div className="work-title">{work.title}</div>
											<div className="work-subtitle">{work.position}</div>
										</div>
										<div className="work-duration">{work.duration}</div>
									</div>
								</a>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
