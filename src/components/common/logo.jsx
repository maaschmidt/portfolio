import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles/logo.css";
import { ThemeContext } from "../../context/ThemeContext";

const Logo = (props) => {
	const { isDarkTheme } = useContext(ThemeContext);
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img
			src={isDarkTheme ? "./logo-white.png" : "./logo.png"}
			alt="logo"
			className="logo"
			width={width}
		/>
	);

	return (
		<React.Fragment>
			{link ? <Link to="//">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
