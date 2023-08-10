// Imports
import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";

// Component
const App = () => {

	// Return
	return(
		<main>
			<ThemeToggle/>
			<SearchForm/>
			<Gallery/>
		</main>
	);

};

// Export
export default App;