import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MaterialUISwitch from "./switch";

import { ThemeContext } from "../../context/ThemeContext";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={active === "home" ? "nav-item active" : "nav-item"}
							>
								<Link to="//">Home</Link>
							</li>
							<li
								className={active === "about" ? "nav-item active" : "nav-item"}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects" ? "nav-item active" : "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "contact" ? "nav-item active" : "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>

					<MaterialUISwitch
						sx={{ m: 1 }}
						onClick={toggleTheme}
						defaultChecked={isDarkTheme}
					/>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
