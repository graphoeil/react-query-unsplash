// Imports
import React from "react";
import { useAppContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// Component
const ThemeToggle = () => {

	// Context
	const { isDarkTheme, toggleDarkTheme } = useAppContext();

	// Return
	return(
		<section className="toggle-container" onClick={ toggleDarkTheme }>
			<button type="button" className="dark-toggle">
				{
					isDarkTheme ? <BsFillMoonFill fill="#f8fafc" className="toggle-icon"/> : <BsFillSunFill className="toggle-icon"/>
				}
			</button>
		</section>
	);

};

// Export
export default ThemeToggle;