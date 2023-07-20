import React from "react";

import Card from "../common/card";

import "./styles/experiences.css";

const Experiences = ({ icon, title, data }) => {
	return (
		<div className="experiences">
			<Card
				icon={icon}
				title={title}
				body={
					<div className="experiences-body">
						{data.map((experience, index) => (
							<div className="experience" key={index}>
								<a href={experience.href} target="_blank" rel="noreferrer">
									<img
										src={experience.logo}
										alt={experience.title}
										className="experience-image"
									/>
									<div className="experience-description">
										<div className="experience-titles">
											<div className="experience-title">{experience.title}</div>
											<div className="experience-subtitle">
												{experience.position}
											</div>
										</div>
										<div className="experience-duration">
											{experience.duration}
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

export default Experiences;
