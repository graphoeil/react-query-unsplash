// Imports
import { createContext, useContext, useState, useEffect } from "react";

// Context
const AppContext = createContext();

// Dark theme initial setting
const getInitialDarkMode = () => {
	let darkMode = true;
	// From localStorage
	if (localStorage.getItem('unsplashDarkTheme')){
		// !!! Local storage store only string ;-)
		darkMode = localStorage.getItem('unsplashDarkTheme') === 'true';
	}
	return darkMode;
};

// Provider
const AppProvider = ({ children }) => {
	
	// Variables
	const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
	const [searchTerm, setSearchTerm] = useState('bulls');

	// Methods
	// Dark theme
	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);
		// Add / remove dark theme to body based on newDarkTheme
		const body = document.querySelector('body');
		body.classList.toggle('dark-theme', newDarkTheme);
		// Add to localStorage
		localStorage.setItem('unsplashDarkTheme', newDarkTheme);
	};

	// Set dark theme based on localStorage
	useEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkTheme);
	}, []);

	// Return
	return <AppContext.Provider value={ {
		// Dark theme
		isDarkTheme, toggleDarkTheme,
		// Search term
		searchTerm, setSearchTerm
	} }>
		{ children }
	</AppContext.Provider>

};

// Custom Hook
export const useAppContext = () => {
	return useContext(AppContext);
};

// Export
export { AppProvider };