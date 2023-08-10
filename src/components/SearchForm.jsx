// Imports
import React, { useRef } from "react";
import { useAppContext } from "../context";

// Component
const SearchForm = () => {

	// Context
	const { setSearchTerm } = useAppContext();

	// Uncontrolled form
	const searchRef = useRef();

	// Submit form
	const submitForm = (e) => {
		e.preventDefault();
		const searchValue = searchRef.current.value;
		if (!searchValue){
			// Search for bulls ;-)
			setSearchTerm('bulls');
			return;
		}
		// Send search term to context
		setSearchTerm(searchValue);
		// Reset input
		searchRef.current.value = '';
	};

	// Return
	return(
		<section>
			<h1 className="title">Unsplash images</h1>
			<form className="search-form" onSubmit={ submitForm }>
				<input ref={ searchRef } type="text" name="search" id="search" 
					placeholder="Bulls" className="form-input search-input" />
				<button type="submit" className="btn">Search</button>
			</form>
		</section>
	);

};

// Export
export default SearchForm;