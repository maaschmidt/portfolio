import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/educations.css";
import INFO from "../../data/user";

const Educations = () => {
	return (
		<div className="educations">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="educations-body">
						{INFO.homepage.educations.map((education, index) => (
							<div className="education" key={index}>
								<a href={education.href} target="_blank" rel="noreferrer">
									<img
										src={education.logo}
										alt={education.institution}
										className="education-image"
									/>
									<div className="education-description">
										<div className="education-titles">
											<div className="education-title">{education.title}</div>
											<div className="education-subtitle">
												{education.institution}
											</div>
										</div>
										<div className="education-duration">
											{education.duration}
										</div>
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

export default Educations;
