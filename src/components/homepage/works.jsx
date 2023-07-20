import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<a href="https://caf.io/" target="_blank" rel="noreferrer">
								<img src="./caf.png" alt="caf" className="work-image" />
								<div className="work-description">
									<div className="work-titles">
										<div className="work-title">Caf</div>
										<div className="work-subtitle">IT Intern</div>
									</div>
									<div className="work-duration">2022 - 2023</div>
								</div>
							</a>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
