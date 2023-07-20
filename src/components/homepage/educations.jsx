import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/educations.css";

const Educations = () => {
	return (
		<div className="educations">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="educations-body">
						<div className="education">
							<a
								href="https://www.univates.br/graduacao/analise-e-desenvolvimento-de-sistemas"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./univates.jpeg"
									alt="univates"
									className="education-image"
								/>
								<div className="education-description">
									<div className="education-titles">
										<div className="education-title">
											Análise e Desenvolvimento de Sistemas
										</div>
										<div className="education-subtitle">Univates</div>
									</div>
									<div className="education-duration">2023 - 2024</div>
								</div>
							</a>
						</div>
						<div className="education">
							<a
								href="https://www.univates.br/crieti"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./univates.jpeg"
									alt="univates"
									className="education-image"
								/>
								<div className="education-description">
									<div className="education-titles">
										<div className="education-title">
											Formação Intensiva e Imersiva CRIE_TI
										</div>
										<div className="education-subtitle">Univates</div>
									</div>
									<div className="education-duration">1200 hours</div>
								</div>
							</a>
						</div>
						<div className="education">
							<a
								href="https://www.cursoemvideo.com/curso/curso-de-git-e-github/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./cursoVideo.png"
									alt="caf"
									className="education-image"
								/>
								<div className="education-description">
									<div className="education-titles">
										<div className="education-title">Git e GitHub</div>
										<div className="education-subtitle">Curso em Video</div>
									</div>
									<div className="education-duration">20 hours</div>
								</div>
							</a>
						</div>
						<div className="education">
							<a
								href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./cursoVideo.png"
									alt="caf"
									className="education-image"
								/>
								<div className="education-description">
									<div className="education-titles">
										<div className="education-title">Algoritmo</div>
										<div className="education-subtitle">Curso em Video</div>
									</div>
									<div className="education-duration">40 hours</div>
								</div>
							</a>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Educations;
